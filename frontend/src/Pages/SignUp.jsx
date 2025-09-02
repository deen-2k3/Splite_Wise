import React, { useState } from "react";
import { apiConnector } from "../Services/apiConnector";
import { SignInUrl } from "../Services/apis";

const SignUp = () => {
  const [data, setData] = useState({
    fullname: "",
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  // Destructure for easier usage
  const { fullname, name, email, password, photo } = data;

  // Handle input change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend signup endpoint
    //  const signupUrl = "http://localhost:8080/api/users/signup";

      const res = await apiConnector("POST", SignInUrl, data);

      console.log("Signup success:", res.data);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          value={fullname}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <br /><br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Username"
        />
        <br /><br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br /><br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <br /><br />
        <input
          type="text"
          name="photo"
          value={photo}
          onChange={handleChange}
          placeholder="Photo URL"
        />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
