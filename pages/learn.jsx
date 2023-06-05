import Metatags from '../components/Metatags'
import styles from '../styles/InfoPage.module.scss'
import Link from 'next/link';
import { items } from "../lib/lessons"

export default function Learn() {
  return (<>
    <Metatags title="Honorable Mentions" description="A page for me to mention people for whatever reason I deem necessary"/>
    <header className={styles.header}>
      <h1>Honorable Mentions</h1>  
      <p>A page for me to mention people for whatever reason I deem necessary.</p>
    </header>
    <main className={`${styles.main} ${styles.lessons}`}>
      {items.map((item, key) => {
        return (<Link key={key} href={`./lesson/${item.slug}`}>
          <button className={styles.lessonCard}>
            <img src={item.img} alt={item.title}/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </button>
        </Link>)
      })}
    </main>
  </>)
}