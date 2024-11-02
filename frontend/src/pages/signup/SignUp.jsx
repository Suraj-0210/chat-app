import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();

  const waitForTwoSeconds = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const [formData, setFormData] = useState({
    fullname: "",
    gender: "",
    username: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (you can add more as needed)
    if (
      !formData.fullname ||
      !formData.gender ||
      !formData.username ||
      !formData.phone ||
      !formData.password
    ) {
      toast.error("Please fill out all fields!");
      return;
    }

    // Simulate success
    toast.success("Account created successfully!");
    console.log(formData); // Handle sign-up logic here
    await waitForTwoSeconds();
    navigate("/");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r ">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-center text-gray-300">
            Sign Up <span className="text-blue-500">ChatApp</span>
          </h2>
          <p className="text-center text-gray-300 mb-4">Create a new account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm md:text-lg text-gray-300">
                Full Name
              </span>
            </label>
            <input
              type="text"
              id="fullname"
              className="input input-bordered w-full text-sm"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm md:text-lg text-gray-300">
                Gender
              </span>
            </label>
            <select
              id="gender"
              className="select select-bordered w-full text-sm md:text-base"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Please select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm md:text-lg text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              id="username"
              className="input input-bordered w-full text-sm"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter a username"
            />
          </div>

          {/* Phone */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm md:text-lg text-gray-300">
                Phone
              </span>
            </label>
            <input
              type="text"
              id="phone"
              className="input input-bordered w-full text-sm"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm md:text-lg text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full text-sm"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter a strong password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>

        <p className="text-sm md:text-lg text-center text-gray-300 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-950 hover:underline">
            Login
          </a>
        </p>
      </div>

      {/* Toast notification container */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
