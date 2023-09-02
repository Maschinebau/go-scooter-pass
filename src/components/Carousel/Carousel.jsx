import styles from "./Carousel.module.scss"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SwiperComponent } from "components/swiperComponent/swiperComponent"

const images = [
  "src/assets/first.jpg",
  "src/assets/second.jpg",
  "src/assets/third.jpg",
  "src/assets/fourth.jpg"
]
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
