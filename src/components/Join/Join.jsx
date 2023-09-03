import styles from "./join.module.scss"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import scooterImage from '../../assets/smkt00032.png'

export function Join() {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const titleVariants = {
    initial: {
      x: -400,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }

  const textVariants = {
    initial: {
      x: -200,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.6
      }
    }
  }

  return (
    <section className={styles.join}>
      <a href="#" className={styles.logo}></a>
      <motion.h1
        className={styles.title}
        variants={titleVariants}
        initial="initial"
        animate={inView ? "animate" : ""}
        ref={ref}
      >
        Вступайте в клуб Самокатов
      </motion.h1>
      <motion.p
        className={styles.text}
        variants={textVariants}
        initial="initial"
        animate={inView ? "animate" : ""}
        ref={ref}
      >
        Купите абонемент, чтобы стать&nbsp;&nbsp;&nbsp; частью клуба в новом
        сезоне-2024. 8 месяцев за&nbsp;
        <span className={styles.price}>
          <span className={styles.first}>499₽</span>
          <span className={styles.second}>3190₽</span>
        </span>
      </motion.p>
      <button className={styles.button}>Стать частью клуба</button>
      <img
        className={styles.scoooter}
        src={scooterImage}
        alt="scooter"
      />
      <div className={styles.spinner}></div>
    </section>
  )
}
