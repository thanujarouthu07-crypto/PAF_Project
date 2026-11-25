import { useState } from "react";

function Adoption({ setPage, pet }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    reason: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setMessage("Adoption application submitted successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      reason: ""
    });
  }

  return (
    <div className="page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Pet Adoption Form</h2>

        <h3>Pet Name: {pet?.name || "Selected Pet"}</h3>

        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Enter Your Address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <textarea
          name="reason"
          placeholder="Why do you want to adopt this pet?"
          value={form.reason}
          onChange={handleChange}
          required
        />

        {message && <p className="success">{message}</p>}

        <button type="submit">Submit Application</button>

        <p>
          <span className="link" onClick={() => setPage("menu")}>
            Back to Pets
          </span>
        </p>
      </form>
    </div>
  );
}

export default Adoption;