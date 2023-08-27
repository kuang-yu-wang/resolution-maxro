'use client'
// import Image from 'next/image'
import style from './Home.module.css';
import {useRef} from 'react';

export default function Home() {
  const {innerWidth: width, innerHeight: height} = useRef([window.innerWidth, window.innerHeight]);
  return (
    <main>
      <div className={style.container}>
        <h1 className={style.title}>Maxro Resolution</h1>
        <div className={style.seperator}></div>
        <p className={style.text}>Width: <span className={style.highlight}>{innerWidth}</span></p>
        <p className={style.text}>Height: <span className={style.highlight}>{innerHeight}</span></p>
      </div>
    </main>
  )
}