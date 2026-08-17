import UserCard from "./components/UserCard";
import "./App.css";

import shayab from "./assets/shayab.jpeg";
import arijit from "./assets/arijit.jpeg";
import love from "./assets/love.jpeg";

function App() {
  return (
    <div className="container">
      <UserCard
        name="Shayab"
        desc="desc1"
        image={shayab}
        style={{ borderRadius: "10px" }}
      />

      <UserCard
        name="Arijit"
        desc="desc2"
        image={arijit}
        style={{ borderRadius: "10px" }}
      />

      <UserCard
        name="Love"
        desc="desc3"
        image={love}
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
}

export default App;