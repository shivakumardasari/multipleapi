import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [stat, setStat] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://catfact.ninja/fact"),
      fetch(" https://catfact.ninja/fact ")
    ])

      .then((res) => {
        return Promise.all(
          res.map((res) => {
            return res.json();s
          })
        );
      })
      .then((res) => setStat((pre) => [...pre, res[0]]));
  }, []);

  return (
    <div className="App">
      <h1>hello React</h1>
      <h3>
        {stat.map((i) => (
          <li>{i.fact}</li>
        ))}
      </h3>
    </div>
  );
}
