import Metatags from '../components/Metatags'
import styles from '../styles/InfoPage.module.scss'
import { items } from "../lib/people-agencies"

export default function PeopleAgencies() {
  return (<>
    <Metatags title="People & Agencies | [boring]" description="Discover individuals and agencies to help you build a site that isn't [boring]"/>
    <header className={styles.header}>
      <h1>People & Agencies</h1>  
      <p>Discover individuals and agencies to help you build a site that isn't [boring].</p>
    </header>
    <main className={`${styles.main} ${styles.pa}`}>
      {items.map((item, key) => {
        return (<article className={styles.paCard} key={key}>
          <div>
            <h2>{item.name}</h2>
            <div className={styles.tags}>
              {item.tags.map((tag, key) => {
                return(<span key={key}>{tag}</span>)
              })}
            </div>
            <p>{item.description}</p>
          </div>
          <div className={styles.info}>
            <a href={item.link} target="_blank" className={styles.webLink}>
              <h3>{item.website}</h3>
              <p>Website</p>
            </a>
            <div>
              <h3>Socials</h3>
              <div className={styles.socials}>
                {item.socials.email && <a href={item.socials.email.link} target="_blank"><img src="/media/pa/email.svg" alt="Email Icon"/></a>}
                {item.socials.github && <a href={item.socials.github.link} target="_blank"><img src="/media/pa/github.svg" alt="Github Logo"/></a>}
                {item.socials.instagram && <a href={item.socials.instagram.link} target="_blank"><img src="/media/pa/instagram.svg" alt="Instagram Logo"/></a>}
                {item.socials.discord && <a href={item.socials.discord.link} target="_blank"><img src="/media/pa/discord.svg" alt="Discord Logo"/></a>}
              </div>
            </div>
            <div>
              <h3>{item.price}</h3>
              <p>Price Range</p>
            </div>
          </div>
        </article>)
      })}
    </main>
  </>)
}