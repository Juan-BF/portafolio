import styles from './App.module.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Formation from './components/pages/Formation';
import Hero from './components/pages/Hero';
import { Navbar } from './components/pages/Navbar';

import Proyectos from './components/pages/Proyectos';


function App() {


  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Formation/>
        <Proyectos/>
        <Contact/>
        <Footer/>
      </div>
    </>

  )
}

export default App
