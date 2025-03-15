import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Service />
      <Contact />
    </>
  );
}

export default App;
