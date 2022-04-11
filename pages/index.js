import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import yolo from './test.yolo'

export default function Home() {
  return (
    <div className={styles.container}>
      <pre>{yolo}</pre>
    </div>
  )
}
