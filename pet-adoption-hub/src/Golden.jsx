function Golden({ setPage, setSelectedPet }) {
  return (
    <div className="page">
      <div className="form-card">
        <h2>Golden Retriever</h2>

        <img
          src="https://res.cloudinary.com/fwkc-production/image/upload/v1/fwkc-prod/May_1"
          alt="Golden Retriever"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <p><b>Age:</b> 2 Years</p>
        <p><b>Gender:</b> Male</p>
        <p><b>Health:</b> Healthy</p>
        <p><b>Vaccination:</b> Vaccination details available on request</p>
        <p><b>Personality:</b> Friendly, playful and loyal</p>
        <p><b>Care:</b> Needs daily exercise, grooming and a balanced diet</p>

        <button onClick={() => {
          setSelectedPet("Golden Retriever");
          setPage("adoption");
        }}>
          Adopt Me
        </button>

        <button onClick={() => setPage("menu")}>
          Back to Menu
        </button>
      </div>
    </div>
  );
}

export default Golden;