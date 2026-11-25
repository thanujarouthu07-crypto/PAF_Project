function Turtle({ setPage, setSelectedPet }) {
  return (
    <div className="page">
      <div className="form-card">
        <h2>Turtle</h2>

        <img
          src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500"
          alt="Turtle"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <p><b>Age:</b> 1 Year</p>
        <p><b>Gender:</b> Not confirmed</p>
        <p><b>Health:</b> Veterinary check recommended</p>
        <p><b>Personality:</b> Calm and quiet</p>
        <p><b>Care:</b> Needs a suitable habitat, proper lighting and a balanced diet</p>

        <button onClick={() => {
          setSelectedPet("Turtle");
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

export default Turtle;