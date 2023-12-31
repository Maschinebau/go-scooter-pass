import styles from "./Profit.module.scss"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Profit() {
  const listOpacity = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  const listTransition = {
    duration: 1,
    ease: "easeInOut"
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className={styles.profit}>
      <h1 className={styles.title}>Вот что даёт участие в клубе</h1>
      <ul className={styles.list}>
        <motion.li
          variants={listOpacity}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...listTransition, delay: 0.6 }}
          className={styles.item}
          ref={ref}
        >
          <div className={styles.icon1}></div>
          <p className={styles.text}>0 ₽ за старт в каждой поездке</p>
        </motion.li>
        <motion.li
          variants={listOpacity}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...listTransition, delay: 1.2 }}
          className={styles.item}
          ref={ref}
        >
          <div className={styles.icon2}></div>
          <p className={styles.text}>
            Катаетесь c друзьями? Бронируйте до трёх самокатов c аккаунта c
            абонементом — так у всех будет бесплатный старт
          </p>
        </motion.li>
        <motion.li
          variants={listOpacity}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...listTransition, delay: 1.8 }}
          className={styles.item}
          ref={ref}
        >
          <div className={styles.icon3}></div>
          <p className={styles.text}>
            Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе
            или передохнуть
          </p>
        </motion.li>
        <motion.li
          variants={listOpacity}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ ...listTransition, delay: 2.4 }}
          className={styles.item}
          ref={ref}
        >
          <div className={styles.icon4}></div>
          <p className={styles.text}>
            Если самокат недостаточно заряжен или c ним неудобно переходить
            дорогу, замените по пути на другой — это бесплатно
          </p>
        </motion.li>
      </ul>
    </section>
  )
}
