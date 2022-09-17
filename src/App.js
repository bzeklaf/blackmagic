import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import What from "./What";
import Why from "./Why";
import Contacts from "./Contacts";
import Apply from "./Apply";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <What/>
      <Why/>
      <Contacts/>
      <Apply/>
      <Footer/>
    </div>
  
  );
}

export default App;