import styles from './Ticket.module.scss'
import { TextBlock } from 'components/TextBlock/TextBlock'
import samokat from '../../assets/groupbottom.png'

export function Ticket() {

  return (
    <section className={styles.ticket}>
      <div className={styles.wrapper}>
        <TextBlock
          title='80  % наших пользователей уже в клубе и экономят на поездках'
          titleClass={styles.title}
          text='Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об открытии сезона предупредим заранее, чтобы вы были готовы'
          textClass={styles.text}
          hasButton={true}
          buttonText='Хочу абонемент'
          buttonExtraClass={styles.button}
        />
      </div>
      <img className={styles.samokat} src={samokat} alt="самокат яндекса" />
      <div className={styles.spinner}></div>
    </section>
  )
}