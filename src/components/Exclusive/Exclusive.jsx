import React, { useState } from 'react'
import styles from './Exclusive.module.scss'
import { TextBlock } from 'components/textBlock/textBlock'
import {Carousel} from 'components/carousel/carousel'

export function Exclusive() {

  return (
    <section className={styles.exclusive} >
      <TextBlock
        titleClass={styles.title}
        title='Эксклюзивный доступ к событиям Самокатов'
        textClass={styles.text}
        text='С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч. В 2023 году мы танцевали на Даче Плюс с Антохой MC, катались на самокатах с Сергеем Мезенцевым и слушали хор Attaque de Panique'
      />
      <Carousel />
    </section>
  )
}


