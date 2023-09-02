import styles from './join.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


export function Join() {

  return (
    <section className={styles.join}>
      <a href="#" className={styles.logo}></a>
      <h1 className={styles.title}>Вступайте в клуб Самокатов</h1>
      <p className={styles.text}>Купите абонемент, чтобы стать&nbsp;&nbsp;&nbsp;
        частью клуба в новом сезоне-2024. 8 месяцев за&nbsp;
        <span className={styles.price}>
          <span className={styles.first}>499₽</span>
          <span className={styles.second}>3190₽</span>
        </span>
      </p>
      <button className={styles.button}>Стать частью клуба</button>
      <img className={styles.scoooter} src="src\assets\smkt00032.png" alt="scooter" />
      <div className={styles.spinner}></div>
    </section>
  )
}
