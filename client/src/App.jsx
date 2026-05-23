import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/localhost:500/message")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>DNS Working 🚀</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;