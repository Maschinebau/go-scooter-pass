import styles from "./SwiperComponent.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "../../../node_modules/swiper/swiper.min.css"
// import '../../../node_modules/swiper/swiper.css'
import PropTypes from "prop-types"
import { EffectCoverflow } from '../../../node_modules/swiper';

export function SwiperComponent({ images }) {
  let swiper

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

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[EffectCoverflow]} effect="coverflow"
        onSwiper={(node) => (swiper = node)}
        navigation={{
          prevEl: `.${styles.controls}`,
          nextEl: `.${styles.button2}`
        }}
        className={styles.swiper}
        spaceBetween={150}
        slidesPerView={1}
        loop={true}
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
        <button className={styles.button1} onClick={goPrev}></button>
        <button className={styles.button2} onClick={goNext}></button>
      </div>
    </div>
  )
}

SwiperComponent.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}
