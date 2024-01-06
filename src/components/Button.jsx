import styles from "./styles/Hero.module.css"
import PropTypes from 'prop-types';

const Button = ({textInf}) => {
  return (
    <>
      <button className={styles.btnresumo}>
                                <span></span>{textInf}
                            </button>
    </>
  )
}

Button.propTypes = {
  textInf: PropTypes.string.isRequired, // Ajusta el tipo según lo que esperes para 'texto'
};

export default Button
