import Metatags from '../components/Metatags'
import styles from '../styles/InfoPage.module.scss'
import { items } from "../lib/inspiration"

export default function Inspiration() {
  return (<>
    <Metatags title="My Socials" description="I'm not a social person"/>
    <header className={styles.header}>
      <h1>My Socials</h1>  
      <p>Just a few ways for you to contact me.</p>
    </header>
    <main className={`${styles.main} ${styles.inspiration}`}>
      {items.map((item, key) => {
        return (<a className={styles.inspirationCard} key={key} href={item.link} target="_blank">
          <img src={item.image} alt={item.title} className={styles.mainImage}/>
          <div>
            <h2>{item.title}</h2>
            <img src="/media/open.svg" alt="Open in new tab"/>
          </div>
          <p>{item.description}</p>
        </a>)
      })}
    </main>
  </>)
}