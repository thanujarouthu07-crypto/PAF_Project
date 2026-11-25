
import { useState } from "react";

function Admin({ setPage }) {
  const [email, setEmail] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setMessage("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Initialize the demo admin code if it doesn't exist
    if (localStorage.getItem("adminCode") === null) {
      localStorage.setItem("adminCode", "3421");
    }

    const savedAdminCode = localStorage.getItem("adminCode");

    if (adminCode === savedAdminCode) {
      setPage("admin");
    } else {
      setMessage("Invalid admin code!");
    }
  }

  return (
    <div className="page">
      <form className="form-card" onSubmit={handleLogin} noValidate>
        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Enter Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Admin Code"
          value={adminCode}
          onChange={(e) => setAdminCode(e.target.value)}
          required
        />

        {message && <p className="login-error">{message}</p>}

        <button type="submit">Admin Login</button>

        <p>
          Not an admin?{" "}
          <span className="link" onClick={() => setPage("login")}>
            User Login
          </span>
        </p>

        <span className="link" onClick={() => setPage("start")}>
          Back to Home
        </span>
      </form>
    </div>
  );
}

export default Admin;
