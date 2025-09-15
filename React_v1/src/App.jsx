import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardTest from "./components/CardTest/CardTest.jsx";

function App() {
  const [count, setCount] = useState(0);

  const data = [
    {
      nombre: "Iguana",
      edad: 5,
      tipo: "Reptil",
      color: "Verde",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Portrait_of_an_Iguana.jpg",
    },
    {
      nombre: "Firulais",
      edad: 3,
      tipo: "Perro",
      color: "Marron",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg",
    },
    {
      nombre: "Michi",
      edad: 2,
      tipo: "Gato",
      color: "Blanco",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFtXq96g9yhbCU9injtrNaQ0TCPOrwM5w4A&s",
    },
  ];

  return (
    <>
      <div>
        <CardTest data={data[0]} />
        <CardTest data={data[1]} />
        <CardTest data={data[2]} />
      </div>
    </>
  );
}

export default App;
