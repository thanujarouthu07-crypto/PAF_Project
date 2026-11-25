import { useState } from "react";

function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setMessage("");

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email (e.g., name@example.com).");
      return;
    }

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (
      email === savedEmail &&
      password === savedPassword &&
      savedEmail !== null
    ) {
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

        {/* Small inline validation message */}
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