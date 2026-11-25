function WhiteRabbit({ setPage, setSelectedPet }) {
  return (
    <div className="page">
      <div className="form-card">
        <h2>White Rabbit</h2>

        <img
          src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500"
          alt="White Rabbit"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <p><b>Age:</b> 6 Months</p>
        <p><b>Gender:</b> Female</p>
        <p><b>Color:</b> White</p>
        <p><b>Health:</b> Healthy</p>
        <p><b>Vaccination:</b> Check with shelter</p>
        <p><b>About:</b> Gentle and playful rabbit</p>
        <p><b>Food:</b> Hay, leafy greens and fresh water</p>
        <p><b>Care:</b> Regular grooming and space to hop</p>

        <button onClick={() => {
          setSelectedPet("White Rabbit");
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

export default WhiteRabbit;