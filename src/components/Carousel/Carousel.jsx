import styles from './Carousel.module.scss'
import React, { useState, } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const images = ['src/assets/first.jpg', 'src/assets/second.jpg', 'src/assets/third.jpg', 'src/assets/fourth.jpg']
const isMobileResolution = window.innerWidth <= 450

export function Carousel() {
  const [currentImage, setCurrentImage] = useState(0)

  const setNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }
  const setPrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <div className={styles.wrapper}>
      {isMobileResolution ? (
        // <div className={styles.carousel}>
        //   <motion.img
        //     src={images[currentImage]}
        //     alt='Мероприятие докататься'
        //     className={styles.img}
        //   />
        //   <div className={styles.controls}>
        //     <button className={styles.button1} onClick={setPrev} disabled={currentImage === 0}></button>
        //     <button className={styles.button2} onClick={setNext} disabled={currentImage === images.length - 1}></button>
        //   </div>
        // </div>
        <Swiper></Swiper>
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
              <img src={image} alt={'Мероприятие докататься'} className={styles.img} />
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


// тут пытался swiperjs подключать

// export function Carousel() {
//   return (
//     <div className={styles.carousel}>
//       <Swiper className={styles.swiper}>
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img src={image} alt="Slide" className={styles.img} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }


import  {useSwipeable}  from '../../../node_modules/react-swipeable/dist/react-swipeable.js'

export function Swiper() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const handleSwipedLeft = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleSwipedRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className={styles.carousel}>
      <Swipeable onSwipedLeft={handleSwipedLeft} onSwipedRight={handleSwipedRight}>
        <img className={styles.img} src={images[currentIndex]} alt="Swiper Image" />
      </Swipeable>
      <button className={styles.button1} onClick={handleSwipedRight}>Previous</button>
      <button className={styles.button2} onClick={handleSwipedLeft}>Next</button>
    </div>
  )
}
