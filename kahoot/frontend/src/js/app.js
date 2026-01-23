import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [message, setMessage] = useState("");
  const [apiKeyLoaded, setApiKeyLoaded] = useState(false);

  useEffect(() => {
    api.get("/api/test")
      .then(response => {
        setMessage(response.data.message);
        setApiKeyLoaded(response.data.api_key_loaded);
      })
      .catch(error => {
        console.error("Erreur API :", error);
      });
  }, []);

  return (
    <div>
      <h1>Test API</h1>
      <p>{message}</p>
      <p>API key chargée : {apiKeyLoaded ? "Oui" : "Non"}</p>
    </div>
  );
}

export default App;
