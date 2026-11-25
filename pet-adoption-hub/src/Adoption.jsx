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

    // Get previously saved adoption applications
    const requests = JSON.parse(
      localStorage.getItem("adoptionRequests") || "[]"
    );

    // Save the completed adoption application
    requests.push({
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      reason: form.reason,
      pet: pet?.name || "Selected Pet",
      time: new Date().toLocaleString()
    });

    localStorage.setItem(
      "adoptionRequests",
      JSON.stringify(requests)
    );

    // Show success message
    setMessage("Adoption application submitted successfully!");

    // Clear the form after successful submission
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