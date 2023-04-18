import styles from '../styles/home.module.css'
import { Inter } from 'next/font/google'
import { Toolbar } from './components/toolbar';
//import { Toolbar } from './components/toolbar';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 return(
  <div className='page-container'>
    <Toolbar></Toolbar>
    <div className={styles.main}>
      <h1>Your Own News App</h1>
      <h3>Your one stop shop for latest news articles</h3>
    </div>
  </div>
 );

 
 }
