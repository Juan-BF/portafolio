import PropTypes from "prop-types";
import styles from "./cards.module.css"
import imagenes from "../../imagenes/imagenes"

const Cards = ({ titulo, referente, linkGithub, linkweb, img }) => {
    return (
        <div className={styles.boxCards}>
            <img src={img} alt="imagen proyecto" />
            <div className={styles.informacionP}>
                <h1>{titulo}</h1>
                <p>{referente}</p>
            </div>
            <div className={styles.boxLink}>
                
                <a href={linkGithub} className={styles.github} target="_blank" rel="noreferrer">
                    <img className={styles.githubl} src={imagenes.githubP} alt="icono  github" />
                    REPO
                </a>
                <a href={linkweb} className={styles.link} target="_blank" rel="noreferrer">
                    <img className={styles.link} src={imagenes.visualizar} alt="icono de link" />
                    DEMO
                </a>
              
            </div>
        </div>
    )
}

Cards.propTypes = {
    titulo: PropTypes.string.isRequired,
    referente: PropTypes.string.isRequired,
    linkGithub: PropTypes.string.isRequired,
    linkweb: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};


export default Cards
