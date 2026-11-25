function Cat({ setPage, setSelectedPet }) {
  return (
    <div className="page">
      <div className="form-card">
        <h2>Tabby Cat</h2>

        <img
          src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500"
          alt="Cat"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <p><b>Age:</b> 1 Year</p>
        <p><b>Gender:</b> Female</p>
        <p><b>Health:</b> Health check recommended</p>
        <p><b>Vaccination:</b> Check vaccination records</p>
        <p><b>Personality:</b> Curious and gentle</p>
        <p><b>Care:</b> Clean litter, fresh water and daily play</p>
        <p><b>Best Home:</b> Calm indoor home</p>

        <button onClick={() => {
          setSelectedPet("Tabby Cat");
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

export default Cat;