function Beagle({ setPage, setSelectedPet }) {
  return (
    <div className="page">
      <div className="form-card">
        <h2>Beagle</h2>

        <img
          src="https://th.bing.com/th/id/OIP.5lqRdDCzHc73uM7nl2LkbAHaE7?w=500"
          alt="Beagle"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <p><b>Age:</b> 1 Year</p>
        <p><b>Gender:</b> Male</p>
        <p><b>Health:</b> Health check recommended</p>
        <p><b>Vaccination:</b> Verify vaccination records</p>
        <p><b>Personality:</b> Energetic and alert</p>
        <p><b>Care:</b> Walks, training and regular meals</p>
        <p><b>Best Home:</b> Active family</p>

        <button onClick={() => {
          setSelectedPet("Beagle");
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

export default Beagle;