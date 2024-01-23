import styles from './styles/Button.module.css'
import PropTypes from 'prop-types';

const Button = ({ actionGit, actionWeb }) => {
  return (
    <>
      <a href={actionGit} className={styles.btn}><span>GitHub</span></a>
      <a href={actionWeb} className={styles.btn}><span>Demo</span></a>
    </>
  )
}

Button.propTypes = {
  actionGit: PropTypes.string.isRequired,
  actionWeb: PropTypes.string.isRequired,

};

export default Button
