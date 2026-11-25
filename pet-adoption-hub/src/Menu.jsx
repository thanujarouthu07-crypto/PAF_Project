import { useState } from "react";

const pets = [
  {
    name: "Golden Retriever",
    type: "Dog",
    image: "https://res.cloudinary.com/fwkc-production/image/upload/v1/fwkc-prod/May_1",
    page: "golden"
  },
  {
    name: "Tabby Cat",
    type: "Cat",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500",
    page: "cat"
  },
  {
    name: "White Rabbit",
    type: "Rabbit",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500",
    page: "rabbit"
  },
  {
    name: "Beagle",
    type: "Dog",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500",
    page: "beagle"
  },
  {
    name: "Hamster",
    type: "Small Pet",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500",
    page: "hamster"
  },
  {
    name: "Budgie",
    type: "Bird",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500",
    page: "budgie"
  },
  {
    name: "Guinea Pig",
    type: "Small Pet",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500",
    page: "guineaPig"
  },
  {
    name: "Turtle",
    type: "Reptile",
    image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500",
    page: "turtle"
  }
];

function Menu({ setPage }) {
  const [search, setSearch] = useState("");

  const firstName = localStorage.getItem("fname") || "Pet Lover";

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase()) ||
    pet.type.toLowerCase().includes(search.toLowerCase())
  );

  function openPet(pet) {
    setPage(pet.page);
  }

  return (
    <div className="menu-page">
         <input
          className="pet-search"
          type="text"
          placeholder="Search pets by name or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      <header className="menu-header">
        <h2>Pet Adoption</h2>

        <nav className="menu-nav">
          <a href="#home">Home</a>
          <a href="#pets">Available Pets</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button onClick={() => setPage("login")}>
          Logout
        </button>
      </header>

      <section id="home" className="welcome-section">
        <h3>Welcome, {firstName}!</h3>
        <p>Find your perfect companion and give a pet a loving home.</p>
      </section>

      <section className="slider-section">
        <img
          src="https://wallpapercave.com/wp/wp2446973.jpg"
          alt="Pet adoption banner"
          className="slider-image"
        />
      </section>

      <section id="pets" className="pets-section">
        <h2>Available Pets</h2>

        <div className="pet-grid">
          {filteredPets.map((pet) => (
            <div className="pet-card" key={pet.name}>
              <img
                src={pet.image}
                alt={pet.name}
                onClick={() => openPet(pet)}
              />

              <h3>{pet.name}</h3>
              <p>{pet.type}</p>

              <button onClick={() => openPet(pet)}>
                Adopt Me
              </button>
            </div>
          ))}
        </div>

        {filteredPets.length === 0 && (
          <p>No pets found. Try another search.</p>
        )}
      </section>

      <section id="about" className="menu-info">
        <h2>About Us</h2>
        <p>
          We help pets find caring families and loving homes.
          Choose a companion and learn more about responsible adoption.
        </p>
      </section>

      <footer id="contact" className="menu-footer">
        <p>Pet Adoption Platform | Give Every Pet a Loving Home</p>
      </footer>
    </div>
  );
}

export default Menu;