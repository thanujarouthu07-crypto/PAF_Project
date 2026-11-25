function Hamster({ setPage, setSelectedPet }) {
  return (
    <div className="page">
      <div className="form-card">
        <h2>Hamster</h2>

        <img
          src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500"
          alt="Hamster"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <p><b>Age:</b> 4 Months</p>
        <p><b>Gender:</b> Female</p>
        <p><b>Health:</b> Recent health check recommended</p>
        <p><b>Vaccination:</b> Confirm veterinary care requirements</p>
        <p><b>Personality:</b> Small and curious</p>
        <p><b>Care:</b> Spacious enclosure, bedding and fresh water</p>
        <p><b>Best Home:</b> Quiet home with gentle handling</p>

        <button onClick={() => {
          setSelectedPet("Hamster");
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

export default Hamster;