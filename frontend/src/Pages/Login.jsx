import React, { useState } from "react";
import { apiConnector } from "../Services/apiConnector";
import { loginUrl } from "../Services/apis";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await apiConnector("POST", loginUrl, data);
      console.log("✅ Login Successfully:", res.data);

      // Example: save token if returned
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // Redirect or update UI
      // navigate("/dashboard");
    } catch (error) {
      console.error(
        "❌ Login failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-xl w-80 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
