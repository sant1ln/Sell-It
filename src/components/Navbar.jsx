import Image from 'next/image'
import React from 'react'
import SellItLogo from '../../public/sell_it_logo.png'
import { BsFillCartFill } from 'react-icons/bs'
import styles from '../styles/Navbar.module.css'
import { navMenu } from '../utils/nav-menu'
import Link from 'next/link'

export const Navbar = () => {


  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_container_logo}>
        <Image src={SellItLogo} width="40" height="40" />
        <span>Sell <br /> It  ツ</span>
      </div>
      <form className={styles.nav_container_form}>
        <input type="text" placeholder='Search' />
      </form>
      <nav className={styles.nav_container_options}>
        {
          navMenu.map(({id,name,path}) => (
            <Link href={path} key={id}>
              <a>{name}</a>
            </Link>
          ))
        }
      </nav>

      <span className={styles.nav_container_cart}>
        <BsFillCartFill size="1x"/>
        <span>1</span>
      </span>

    </div>
  )
}
