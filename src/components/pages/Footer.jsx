import styles from "../styles/Footer.module.css"
import logo from "../../imagenes/logo.png"
import github from '../../imagenes/redes/githubfooter.png'
import linkedin from '../../imagenes/redes/linkedinfooter.png'


const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.listaRedes}>
          <ul>
            <a href="https://github.com/Juan-BF" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Github Perfil" />
            </a>
            <a href="https://www.linkedin.com/in/juan-vicente-bejarano-fernandez-062089239/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Linkedin Perfil" /></a>
          </ul>
        </div>
        <div className={styles.footerInf}>
          <span>Copyright ©️ | Coded by:</span>
          <img src={logo} alt="imagen de logo" />
          <span>ejarano</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
