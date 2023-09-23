import styles from "./Cash.module.scss"
import { TextBlock } from "../TextBlock/TextBlock"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import groupCashe from "../../assets/groupcashe.png"

export function Cash() {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const plusAnimated = {
    hidden: { opacity: 0, x: 200, rotate: 100 },
    visible: { opacity: 1, x: 0, rotate: 0 }
  }

  return (
    <section className={styles.cash}>
      <TextBlock
        wrapperClass={styles.wrapper}
        title="Купить абонемент и вступить в клуб смогут те, кто в Плюсе"
        titleClass={styles.title}
        text="За каждую поездку на самокатах такие пользователи получают кешбэк баллами. Баллы можно тратить на поездки на самокатах и такси с Яндекс Go, покупки и заказы в других сервисах Яндекса"
        textClass={styles.text}
      />
      <img
        className={styles.scooter}
        src={groupCashe}
        alt="самокат яндекса"
      ></img>
      <motion.div
        className={styles.plus}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={plusAnimated}
        transition={{ delay: 1, duration: 0.5 }}
      ></motion.div>
    </section>
  )
}
