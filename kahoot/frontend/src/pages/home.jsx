import "../css/home.css";
import { useState } from "react";

function Home() {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code.trim() === "") {
      alert("Entre un code de quiz");
      return;
    }

    console.log("Code du quiz :", code);

   
  };

  return (
    <div className="home-container">
      <h1 className="title">🎮 Kahoot Clone</h1>

      <form className="join-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Code du quiz"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button type="submit">Rejoindre</button>
      </form>
    </div>
  );
}

export default Home;
