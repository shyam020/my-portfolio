import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <SocialLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Project />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
