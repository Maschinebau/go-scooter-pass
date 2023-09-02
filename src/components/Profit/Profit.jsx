import styles from './Profit.module.scss'
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Profit() {
  const listOpacity = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const listTransition = {
    duration: 0.8,
    ease: "easeInOut",
  }

  return (
    <section className={styles.profit}>
      <h1 className={styles.title}>Вот что даёт участие в клубе</h1>
      <ul className={styles.list}>
        <motion.li
          variants={listOpacity}
          initial='hidden'
          animate='visible'
          transition={{ ...listTransition, delay: 1 }}
          className={styles.item}
        >
          <div className={styles.icon1}></div>
          <p className={styles.text}>0 ₽ за старт в каждой поездке</p>
        </motion.li>
        <motion.li
          variants={listOpacity}
          initial='hidden'
          animate='visible'
          transition={{ ...listTransition, delay: 1.5 }}
          className={styles.item}
        >
          <div className={styles.icon2}></div>
          <p className={styles.text}>
            Катаетесь с друзьями? Бронируйте до трёх
            самокатов с аккаунта с абонементом — так у всех будет бесплатный старт
          </p>
        </motion.li>
        <motion.li
          variants={listOpacity}
          initial='hidden'
          animate='visible'
          transition={{ ...listTransition, delay: 2 }}
          className={styles.item}
        >
          <div className={styles.icon3}></div>
          <p className={styles.text}>
            Бесплатная пауза 15 минут в поездке — например,
            чтобы зайти за кофе или передохнуть
          </p>
        </motion.li>
        <motion.li
          variants={listOpacity}
          initial='hidden'
          animate='visible'
          transition={{ delay: 2.5 }}
          className={styles.item}
        >
          <div className={styles.icon4}></div>
          <p className={styles.text}>
            Если самокат недостаточно заряжен или с ним
            неудобно переходить дорогу, замените по пути на другой — это бесплатно
          </p>
        </motion.li>
      </ul>
    </section>
  )
}

