function GuineaPig({ setPage, setSelectedPet }) {
  return (
    <div className="page">
      <div className="form-card">
        <h2>Guinea Pig</h2>

        <img
          src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500"
          alt="Guinea Pig"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <p><b>Age:</b> 5 Months</p>
        <p><b>Gender:</b> Female</p>
        <p><b>Health:</b> Veterinary check recommended</p>
        <p><b>Vaccination:</b> Check health records</p>
        <p><b>Personality:</b> Gentle and social</p>
        <p><b>Care:</b> Hay, fresh vegetables and clean bedding</p>
        <p><b>Best Home:</b> Caring home with enough space</p>

        <button onClick={() => {
          setSelectedPet("Guinea Pig");
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

export default GuineaPig;