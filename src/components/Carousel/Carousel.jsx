import styles from "./Carousel.module.scss"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SwiperComponent } from "components/swiperComponent/swiperComponent"
import first from "../../assets/first.jpg"
import second from "../../assets/second.jpg"
import third from "../../assets/third.jpg"
import fourth from "../../assets/fourth.jpg"

const images = [first, second, third, fourth]
const isMobileResolution = window.innerWidth <= 450

export function Carousel() {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  return (
    <div className={styles.wrapper}>
      {isMobileResolution ? (
        <SwiperComponent images={images} />
      ) : (
        <ul className={styles.carousel}>
          {images.map((image, index) => (
            <motion.li
              className={styles.item}
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 70 }}
              transition={{ duration: 0.7, delay: index * 0.4 }}
            >
              <img
                src={image}
                alt={"Мероприятие докататься"}
                className={styles.img}
              />
            </motion.li>
          ))}
        </ul>
      )}
      <div className={styles.decor1}></div>
      <div className={styles.decor2}></div>
      <div className={styles.decor3}></div>
    </div>
  )
}
