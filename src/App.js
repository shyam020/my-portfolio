import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
// import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        <About />
        {/* <Project /> */}
        <Skills />
        <Contact />
        <SocialLinks />
      </div>
    </>
  );
}

export default App;
