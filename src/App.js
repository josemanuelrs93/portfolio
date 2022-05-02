import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='bg-gradient-to-r from-[#493249] to-[#324349]'>
      <Navbar />
      <Home />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
