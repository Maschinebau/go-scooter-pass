import styles from './TextBlock.module.scss'
import { Button } from 'components/Button/Button'

export const TextBlock = ({hasButton, ...props }) => {

  return (
    <div className={`${styles.wrapper} ${props.wrapperClass}`}>
      <h1 className={`${styles.main} ${props.titleClass}`}>{props.title}</h1>
      <p className={`${styles.subtitle} ${props.textClass}`}>{props.text}</p>
      {hasButton && <Button children={props.buttonText} extraClass={props.buttonExtraClass}/>}
    </div>
  )
}