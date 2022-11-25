import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div className={styles.container}>
      <button onClick={() => toast.success('hello toast')}>
        Hello toast
      </button>
    </div>
  )
}
