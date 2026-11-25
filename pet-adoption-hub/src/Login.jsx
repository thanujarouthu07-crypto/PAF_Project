import { useState } from "react";

function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setMessage("");

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Get registered user's login details
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    // Check login details
    if (
      savedEmail !== null &&
      email.trim().toLowerCase() ===
        savedEmail.trim().toLowerCase() &&
      password === savedPassword
    ) {
      // Save successful login history
      const history = JSON.parse(
        localStorage.getItem("loginHistory") || "[]"
      );

      history.unshift({
        email: savedEmail,
        time: new Date().toLocaleString(),
      });

      localStorage.setItem(
        "loginHistory",
        JSON.stringify(history)
      );

      // Increase successful login count
      const count = Number(
        localStorage.getItem("totalLogins") || 0
      );

      localStorage.setItem(
        "totalLogins",
        String(count + 1)
      );

      // Open menu after successful login
      setPage("menu");
    } else {
      setMessage("Invalid email or password!");
    }
  }

  return (
    <div className="page">
      <form
        className="form-card"
        onSubmit={handleLogin}
        noValidate
      >
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {message && (
          <p className="login-error">{message}</p>
        )}

        <button type="submit">Login</button>

        <p>
          Don't have an account?{" "}
          <span
            className="link"
            onClick={() => setPage("register")}
          >
            Register
          </span>
        </p>

        <p>
          <span
            className="link"
            onClick={() => setPage("adminLogin")}
          >
            Login as Admin
          </span>
        </p>

        <span
          className="link"
          onClick={() => setPage("start")}
        >
          Back to Home
        </span>
      </form>
    </div>
  );
}

export default Login;