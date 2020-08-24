import React from 'react'
import style from './HeroBlock.module.css'

const HeroBlock = () => {
  return (
    <div className={style.HeroBlock}>
      <div className={style.fill}></div>
      <div className={style.center}>
        <div className={style.fill}></div>
        <img className={style.logo} src="/logo.png"  alt="Jirat (Net) Ki."/>
        <div className={style.fill}></div>
      </div>
      <div className={style.fill}></div>
    </div>
  )
}

export default HeroBlock
