import styles from "../styles/Formation.module.css"
import iutirla from "../../imagenes/formation/iutirla.png"
import devquest from "../../imagenes/formation/devquest.png"

const Formation = () => {
    return (
        <>
            <section id="Formacaos" className={styles.formation}>
                <h1>Formação.</h1>
                <div className={styles.informationbox}>
                    <div className={styles.formationItem}>
                    <img src={iutirla} alt="imagen de iutirla" />
                            <h1>Universidad IUTIRLA</h1>
                            <p>Desenvolvimento de Sistemas</p>
                            <a href="https://iutirlaoficial.com/wp-content/uploads/2022/09/5-PENSUM-INFORMATICA.pdf" target="_blank" rel="noreferrer" >Grade Curricular</a>       
                    </div>
                    <div className={styles.formationItem}>
                    <img src={devquest} alt="imagen de deve dobro" />
                            <h1>DevQuest</h1>
                            <p>Desenvolvedor Web Full-Stack</p>
                            <spam>En curso -</spam>
                    </div>                  
                </div>

            </section >
        </>
    )
}

export default Formation
