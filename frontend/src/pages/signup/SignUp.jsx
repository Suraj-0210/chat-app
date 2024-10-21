import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    gender: "",
    username: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle sign-up logic here
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r ">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        <p className="text-center text-gray-500 mb-4">Create a new account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm">Full Name</span>
            </label>
            <input
              type="text"
              id="fullname"
              className="input input-bordered w-full text-sm"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm">Gender</span>
            </label>
            <select
              id="gender"
              className="select select-bordered w-full text-sm"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Please select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm">Username</span>
            </label>
            <input
              type="text"
              id="username"
              className="input input-bordered w-full text-sm"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter a username"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm">Phone</span>
            </label>
            <input
              type="text"
              id="phone"
              className="input input-bordered w-full text-sm"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm">Password</span>
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full text-sm"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter a strong password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>

        <p className="text-xs text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
