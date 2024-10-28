import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Chirag" && password === "admin123") {
      navigate("/Form");
    } else {
      alert("Invalid login details");
    }
  };

  return (
    <div class="delcontainer">
      <center>
      <h2 className="h">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="un"> 
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="p"> 
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="loginbutton">
        <button type="submit">Login</button>
        </div>
      </form>
      </center>
    </div>
  );
};

export default AdminLogin;