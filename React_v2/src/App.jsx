import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/Components/Header/Header.jsx";
import Footer from "./assets/Components/Footer/Footer.jsx";
import CardSection from "./assets/Components/CardSection/CardSection.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <CardSection />
        <CardSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
