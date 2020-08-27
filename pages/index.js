import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Slider from '../components/slider'
import Content from '../components/main-content'

export default function Home() {
  return (
    <div className={styles.container}>
       <Slider/>
       <Content/>
    </div>
  )
}
