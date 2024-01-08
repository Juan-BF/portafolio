import Cards from "../direcciones/cards"
import styles from "../styles/Proyectos.module.css"
import constru from "../../imagenes/const.webp"


const Proyectos = () => {
  return (
    <>
      <section id="Projectos" className={styles.boxProyectos}>
      <h1>Proyectos</h1>
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
              img={constru}
              titulo={"titulo"}
              referente={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta vel ut cum adipisci repellat asperiores illum perferendis harum explicabo optio aliquid"} 
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Proyectos
