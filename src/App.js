import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Divider from "./components/Divider";
import Education from "./components/Education";
import About from "./components/About";
import Internship from "./components/Internship";
import Lower from "./components/Lower";
import Projets from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="app-content">
        <Header />
        <About />
        <Education />
        <Internship />
        <Projets />
        <Contact />
        <Lower />
      </div>
      <div className="footer">
        <p>Designed and Developed by Kashyap Chandra</p>
      </div>
    </div>
  );
};

export default App;
