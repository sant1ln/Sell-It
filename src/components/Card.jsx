import React from 'react'
import styles from '../styles/Card.module.css'
/* import { BsHeartFill } from 'react-icons/bs' */
import {  BsHeart } from 'react-icons/bs'
import DummyImage from '../assets/dumy.png'
import Image from 'next/image'

export const Card = () => {
  return (
    <article className={styles.card}>
      <div className={styles.image_container}>
        <Image src={DummyImage}  className={styles.image} />
        <i className={styles.image_fav_icon}>
        <BsHeart size="3rem" value={{className: `image_fav_icon` }} />
        </i>
      </div>
      <div className={styles.card_info}>
        <p>The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality</p>
      </div>
      <input type="button" value="Add to cart" className={styles.button_add} />
    </article>
  )
}
