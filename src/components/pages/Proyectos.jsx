import Link from "../direcciones/link"
import styles from "../styles/Proyectos.module.css"

const Proyectos = () => {
  return (
    <>
      <section id="Projectos" className={styles.boxProyectos}>
        <div className={styles.listaProjectos}>
          <ul className={styles.container}>
            <li className={styles.box}>
              <div className={styles.content}>
              <h3>Responsividade e Atratividade.</h3>
              <p>Responsividade e Atratividade.</p>
                <img className={styles.imagen} src="./proyectos/huddle.png" alt="" />
                <Link
                  titulo="Huddle"
                  referente="HTML-CSS"
                  linkGithub="https://github.com/Juan-BF/project-huddle-landing-page"
                  linkweb="https://juan-bf.github.io/project-huddle-landing-page/"
                />
              </div>
            </li>
            <li className={styles.box}>
              <div className={styles.content}>
                <h3>Responsividade e Atratividade.</h3>
                <p>Página informativa que desafia a adaptação do desktop para smartphones.</p>
                <img className={styles.imagen} src="./proyectos/huddle.png" alt="imagen de huddle" />
                <Link
                  titulo="Huddle"
                  referente="HTML-CSS"
                  linkGithub="https://github.com/Juan-BF/project-huddle-landing-page"
                  linkweb="https://juan-bf.github.io/project-huddle-landing-page/"
                />
              </div>
            </li>
            <li className={styles.box}>

              <div className={styles.content}>
              <h3>Responsividade e Atratividade.</h3>
              <p>Exploração de Dados GitHub: Projeto de Consulta à API.</p>
                <img className={styles.imagen} src="./proyectos/proyectoGithubAPI.png" alt="imagen github" />
                <Link
                  titulo="Github-API"
                  referente="HTML-CSS-JS"
                  linkGithub="https://github.com/Juan-BF/Quest-Api-Github"
                  linkweb="https://juan-bf.github.io/Quest-Api-Github/"
                />
              </div>
            </li>
            <li className={styles.box}>
              <div className={styles.content}>
              <h3>Responsividade e Atratividade.</h3>
              <p>Responsividade e Atratividade.</p>
                <img className={styles.imagen} src="./proyectos/huddle.png" alt="" />
                <Link
                  titulo="Huddle"
                  referente="HTML-CSS"
                  linkGithub="https://github.com/Juan-BF/project-huddle-landing-page"
                  linkweb="https://juan-bf.github.io/project-huddle-landing-page/"
                />
              </div>
            </li>
            <li className={styles.box}>
              <div className={styles.content}>
              <h3>Responsividade e Atratividade.</h3>
              <p>Responsividade e Atratividade.</p>
                <img className={styles.imagen} src="./proyectos/huddle.png" alt="" />
                <Link
                  titulo="Huddle"
                  referente="HTML-CSS"
                  linkGithub="https://github.com/Juan-BF/project-huddle-landing-page"
                  linkweb="https://juan-bf.github.io/project-huddle-landing-page/"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Proyectos
