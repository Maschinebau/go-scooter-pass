import styles from './TextBlock.module.scss'
import { Button } from 'components/Button/Button'
import PropTypes from 'prop-types';

export const TextBlock = ({hasButton, ...props }) => {

  return (
    <div className={`${styles.wrapper} ${props.wrapperClass}`}>
      <h1 className={`${styles.main} ${props.titleClass}`}>{props.title}</h1>
      <p className={`${styles.subtitle} ${props.textClass}`}>{props.text}</p>
      {hasButton && <Button text={props.buttonText} extraClass={props.buttonExtraClass}/>}
    </div>
  )
}

TextBlock.propTypes = {
  hasButton: PropTypes.bool,
  wrapperClass: PropTypes.string,
  titleClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  textClass: PropTypes.string,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonExtraClass: PropTypes.string,
};