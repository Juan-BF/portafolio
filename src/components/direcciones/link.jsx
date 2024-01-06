import PropTypes from "prop-types";
import styles from "./link.module.css"

const Link = ({ titulo, referente, linkGithub, linkweb }) => {
    return (
        <div className={styles.divListP}>
            
            <div className={styles.informacionP}>
                <h1>{titulo}</h1>
                <p>{referente}</p>
            </div>
            <a href={linkGithub} target="_blank" rel="noreferrer">
                <img className={styles.githubl} src="/redes/githubP.png" alt="icono  github" />
            </a>
            <a href={linkweb} target="_blank" rel="noreferrer">
                <img className={styles.link} src="/redes/link.png" alt="icono de link" />
            </a>
        </div>
    )
}

Link.propTypes = {
    titulo: PropTypes.string.isRequired,
    referente: PropTypes.string.isRequired,
    linkGithub: PropTypes.string.isRequired,
    linkweb: PropTypes.string.isRequired,
};


export default Link
