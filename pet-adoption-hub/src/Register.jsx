import { useState } from "react";

function Register({ setPage }) {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    phone: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleRegister(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    localStorage.setItem("fname", form.fname);
    localStorage.setItem("lname", form.lname);
    localStorage.setItem("phone", form.phone);
    localStorage.setItem("age", form.age);
    localStorage.setItem("gender", form.gender);
    localStorage.setItem("email", form.email);
    localStorage.setItem("password", form.password);

    setMessage("Registration Successful!");
    setSuccess(true);

    setTimeout(() => {
      setPage("login");
    }, 1000);
  }

  return (
    <div className="page">
      <form
        className="form-card register-card"
        onSubmit={handleRegister}
      >
        <h2>Registration</h2>

        <input
          name="fname"
          placeholder="First Name"
          value={form.fname}
          onChange={handleChange}
          required
        />

        <input
          name="lname"
          placeholder="Last Name"
          value={form.lname}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={success}>
          Register
        </button>

        {message && (
          <p className={success ? "success" : "error"}>
            {message}
          </p>
        )}

        {!success && (
          <>
            <p>
              Already registered?{" "}
              <span
                className="link"
                onClick={() => setPage("login")}
              >
                Login
              </span>
            </p>

            <span
              className="link"
              onClick={() => setPage("start")}
            >
              Back to Home
            </span>
          </>
        )}
      </form>
    </div>
  );
}

export default Register;