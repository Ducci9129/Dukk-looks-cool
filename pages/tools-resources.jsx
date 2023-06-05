import Metatags from '../components/Metatags'
import styles from '../styles/InfoPage.module.scss'
import { items } from "../lib/tools-resources"

export default function ToolsResources() {
  return (<>
    <Metatags title="My Dumb Crap" description="Tools & Resources to make your site less [boring]"/>
    <header className={styles.header}>
      <h1>My Dumb Creations</h1>  
      <p>A list of all the dumb things I made/forked that I think even matter.</p>
    </header>
    <main className={`${styles.main} ${styles.tr}`}>
      {items.map((item, key) => {
        return (<article className={styles.trCard} key={key}>
          <div>
            <div>
              {item.icon && <img src={item.icon} alt={`${item.title} logo`}/>}
              <h2>{item.title}</h2>
            </div>
            <p>{item.description}</p>
          </div>
          <a href={item.link} target="_blank">
            <span>{item.displayLink}</span>
            <img src="../media/arrow.svg"/>
          </a>
        </article>)
      })}
    </main>
  </>)
}