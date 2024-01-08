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
  textInf: PropTypes.string.isRequired, 
};

export default Button
