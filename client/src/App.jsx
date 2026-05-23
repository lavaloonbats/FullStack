import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://fullstack-17vl.onrender.com/api/message")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Full Stack DevOps Project 🚀</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;