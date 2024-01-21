import Cards from "../direcciones/cards"
import styles from "../styles/Proyectos.module.css"
import constru from "../../imagenes/const.webp"
import login from "../../imagenes/proyectos/loading.png"

const Proyectos = () => {
  return (
    <>
      <section id="Projectos" className={styles.boxProyectos}>
      <h1>Projetos.</h1>
        <div className={styles.listaProjectos}>
          <ul className={styles.cardsList}>
            <li className={styles.cards}>
              <Cards
              img={constru}
              titulo={"titulo"}
              referente={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta vel ut cum adipisci repellat asperiores illum perferendis harum explicabo optio aliquid"} 
              />
            </li>
            <li className={styles.cards}>
            <Cards
              img={constru}
              titulo={"titulo"}
              referente={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta vel ut cum adipisci repellat asperiores illum perferendis harum explicabo optio aliquid"} 
              />
            </li>
            <li className={styles.cards}>
            <Cards
              img={login}
              titulo={"Login interativo"}
              referente={"Desenvolvi um login interativo que destaca minha habilidade em criar experiências de usuário atraentes e funcionais, refletindo minha paixão pelo frontend."} 
              linkweb={"https://juan-bf.github.io/login/"}
              linkGithub={"https://github.com/Juan-BF/login"}
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Proyectos
