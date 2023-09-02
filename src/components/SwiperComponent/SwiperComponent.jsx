import styles from "./SwiperComponent.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "../../../node_modules/swiper/swiper.min.css"
import PropTypes from "prop-types"

export function SwiperComponent({ images }) {
  const goNext = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev()
    }
  }

  let swiper

  return (
    <div className={styles.wrapper}>
      <Swiper
        onSwiper={(node) => (swiper = node)}
        navigation={{
          prevEl: `.${styles.controls}`,
          nextEl: `.${styles.button2}`
        }}
        className={styles.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className={styles.img}
              src={image}
              alt={`Image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.controls}>
        <div className={styles.button1} onClick={goPrev}></div>
        <div className={styles.button2} onClick={goNext}></div>
      </div>
    </div>
  )
}

SwiperComponent.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}
