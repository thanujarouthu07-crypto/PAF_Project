
import { useState } from "react";
import "./App.css";

import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import AdminDashboard from "./AdminDashboard";
import Menu from "./Menu";
import Adoption from "./Adoption";

import Golden from "./Golden";
import Turtle from "./Turtle";
import Beagle from "./Beagle";
import Budgie from "./Budgie";
import Cat from "./Cat";
import GuineaPig from "./GuineaPig";
import Hamster from "./Hamster";
import WhiteRabbit from "./White";

function App() {
  const [page, setPage] = useState("start");
  const [selectedPet, setSelectedPet] = useState("");

  return (
    <div>
      {/* Home Page */}
      {page === "start" && (
        <div className="start-page">
          <h1>Pet Adoption</h1>
          <p>
            Find a loving friend and give a pet a happy home.
          </p>

          <button onClick={() => setPage("login")}>
            Login
          </button>

          <button onClick={() => setPage("register")}>
            Register
          </button>
        </div>
      )}

      {/* User Login */}
      {page === "login" && (
        <Login setPage={setPage} />
      )}

      {/* User Registration */}
      {page === "register" && (
        <Register setPage={setPage} />
      )}

      {/* Admin Login */}
      {page === "adminLogin" && (
        <Admin setPage={setPage} />
      )}

      {/* Admin Dashboard */}
      {page === "admin" && (
        <AdminDashboard setPage={setPage} />
      )}

      {/* User Menu */}
      {page === "menu" && (
        <Menu
          setPage={setPage}
          setSelectedPet={setSelectedPet}
        />
      )}

      {/* Pet Details */}
      {page === "golden" && (
        <Golden
          setPage={setPage}
          setSelectedPet={setSelectedPet}
        />
      )}

      {page === "turtle" && (
        <Turtle
          setPage={setPage}
          setSelectedPet={setSelectedPet}
        />
      )}

      {page === "beagle" && (
        <Beagle
          setPage={setPage}
          setSelectedPet={setSelectedPet}
        />
      )}

      {page === "budgie" && (
        <Budgie
          setPage={setPage}
          setSelectedPet={setSelectedPet}
        />
      )}

      {page === "cat" && (
        <Cat
          setPage={setPage}
          setSelectedPet={setSelectedPet}
        />
      )}

      {page === "guineaPig" && (
        <GuineaPig
          setPage={setPage}
          setSelectedPet={setSelectedPet}
        />
      )}

      {page === "hamster" && (
        <Hamster
          setPage={setPage}
          setSelectedPet={setSelectedPet}
        />
      )}

      {page === "rabbit" && (
        <WhiteRabbit
          setPage={setPage}
          setSelectedPet={setSelectedPet}
        />
      )}

      {/* Adoption Form */}
      {page === "adoption" && (
        <Adoption
          setPage={setPage}
          pet={selectedPet}
        />
      )}
    </div>
  );
}

export default App;
