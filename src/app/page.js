'use client';
// import Image from 'next/image'
import style from './Home.module.css';
import {useState, useEffect} from 'react';

export default function Home() {
  const useDeviceSize = () => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  
    useEffect(() => {
      // component is mounted and window is available
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      // unsubscribe from the event on component unmount
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  
    return [width, height]
  
  };
  const [innerWidth, innerHeight] = useDeviceSize();
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