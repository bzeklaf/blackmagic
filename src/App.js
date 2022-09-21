import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import What from "./What";
import Why from "./Why";
import Contacts from "./Contacts";
import Apply from "./Apply";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Section from "./Section";

function App() {

  return (
    <div className="App">
      <Navbar />
      <motion.div initial={{ y: 200, opacity: 0}}
          whileInView="visible"
          viewport={{ once: true }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .8 , duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9]}}>
        <Hero />
      </motion.div>

     <Section animation={"translateX(-200px)"}>
       <About />
     </Section>
     <Section animation={"translateX(200px)"}>
      <What />
     </Section>
     <Section animation={"translateY(200px)"}>
      <Why />
     </Section>
     <motion.div initial={{visibility:"hidden"}}>
      <Contacts />
     </motion.div>

     <Section animation={"scale(.5,.5)"}>
      <Apply />
     </Section>
      <Footer />
    </div>
  );
}

export default App;
