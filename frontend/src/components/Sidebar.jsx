import { useState, useEffect } from "react";

const Sidebar = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch users from API using fetch
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5003/api/user");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    fetchUsers();
  }, []);

  // Handle logout using fetch
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5003/api/auth/logout");
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  // Filtered users based on search query
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 h-screen w-64 flex flex-col">
      {/* Profile Section */}
      <div className="p-4 bg-white shadow flex items-center space-x-4">
        <img
          src="https://avatar.iran.liara.run/public/boy?username=suryakant0210" // Replace with logged-in user’s profile
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">Suryakanta Prusty</h2>{" "}
          {/* Replace with logged-in user's name */}
        </div>
      </div>

      {/* Search Box */}
      <div className="p-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search users..."
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary mt-2 w-full">Search</button>
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto p-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user._id}
              className="flex items-center space-x-4 p-2 bg-white rounded-lg shadow mb-2"
            >
              <img
                src={user.profilepic}
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{user.username}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No users found</p>
        )}
      </div>

      {/* Logout Button */}
      <div className="p-4">
        <button onClick={handleLogout} className="btn btn-error w-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
