import PropTypes from "prop-types"
import styles from "./Button.module.scss"

export function Button(props) {
  return (
    <button className={`${styles.button} ${props.extraClass}`}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  extraClass: PropTypes.string
}
