import styles from "../styles/Footer.module.css"
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInf}>
          <img src="/Logo.png" alt="imagen de logo" />
          <h2>ejarano</h2>
          <span>⁅Desenvolvedor⁆</span>

        </div>
        <div className={styles.listaRedes}>
          <ul>
            <a href="">Linkedin Perfil</a>
            <a href="">Github Perfil</a>
            <a href="">Jjuanbr97@gmail.com</a>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
