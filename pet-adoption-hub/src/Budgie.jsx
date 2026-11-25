function Budgie({ setPage, setSelectedPet }) {
  return (
    <div className="page">
      <div className="form-card">
        <h2>Budgie</h2>

        <img
          src="https://th.bing.com/th/id/OIP.3_1k5ijdFLFbz44W51vOiQHaEl?w=500"
          alt="Budgie"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <p><b>Age:</b> 8 Months</p>
        <p><b>Gender:</b> Male</p>
        <p><b>Health:</b> Veterinary check recommended</p>
        <p><b>Vaccination:</b> Check veterinary records</p>
        <p><b>Personality:</b> Cheerful and vocal</p>
        <p><b>Care:</b> Spacious cage, toys and fresh water</p>
        <p><b>Best Home:</b> Caring home with daily attention</p>

        <button onClick={() => {
          setSelectedPet("Budgie");
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

export default Budgie;