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
        <header>
          <Navbar />
        </header>
        <main className={styles.Boxmain}>
          <Hero />
          <Proyectos />
          <Formation />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>

  )
}

export default App
