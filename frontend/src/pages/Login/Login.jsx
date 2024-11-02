import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("Submit");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r ">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-center text-gray-300">
            Login <span className="text-blue-500">ChatApp</span>
          </h2>
          <p className="text-center text-gray-300">
            Welcome back! Please login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-base md:text-lg text-gray-300">
                Phone
              </span>
            </label>

            <input
              type="text"
              id="phone"
              className="input input-bordered w-full "
              onChange={handleChange}
              placeholder="(123) 456-7890"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text md:text-lg text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="text-right">
            <a
              href="#"
              className="text-sm md:text-lg text-indigo-950 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <p className="text-sm md:text-lg text-center text-gray-300">
          {"Don't"} have an account?{" "}
          <a href="/signup" className="text-indigo-950 text-lg hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
