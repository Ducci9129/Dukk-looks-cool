import Metatags from '../components/Metatags'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const root = useRef();
  const upText = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".your", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        }
      })
      gsap.to(".webpage", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      })
      gsap.to(".is", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      })
      gsap.to(".boring", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        }
      })
      gsap.to(".subtitle", {
        y: "10vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 2.5,
        }
      })
      gsap.to(".scroll", {
        y: "20vh",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      })
      gsap.to(upText.current.children, {
        y: "-10em",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom top",
          scrub: 0.2,
        }
      })
      gsap.to(".link1", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link1",
          start: "top bottom",
        }
      })
      gsap.to(".link2", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link2",
          start: "top bottom-=100",
        }
      })
      gsap.to(".link3", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link3",
          start: "top bottom",
        }
      })
      gsap.to(".link4", {
        scale: 1, opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".link4",
          start: "top bottom-=100",
        }
      })
      if (window.innerWidth > 1000) {
        gsap.to(".more11", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more1",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more12", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more1",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more21", {
          x: "-50%",
          scrollTrigger: {
            trigger: ".more2",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
        gsap.to(".more22", {
          x: "50%",
          scrollTrigger: {
            trigger: ".more2",
            start: "top bottom",
            end: "bottom bottom-=100",
            scrub: 0.5,
          }
        })
      } else {
        if (localStorage.getItem('alertShown')) {} else {
          alert("Thanks for visiting. Use a larger screen or computer for a better experience.")
          localStorage.setItem('alertShown', true)
        }
      }
    }, root);

    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={root}>
      <Metatags/>
      <header id={styles.header} className="header">
        <h1>
          <span id={styles.heroTxt}>
            <div><span className="your">My</span> <span className="webpage">Website</span></div> 
            <div><span className="is">Looks</span> <span className="boring">Cool</span></div>
          </span>
          <span id={styles.bgTxt}>My Website<br/>Looks Cool</span>
        </h1>
        <h2 className="subtitle">So Cooool :></h2>
        <div id={styles.scrollPrompt} className="scroll">
          <div className={styles.scrollAnim}/>
          <h2>Scroll cause I'm fancy</h2>
        </div>
        <span id={styles.upText} ref={upText} aria-hidden="true">
          {Array(30).fill(true).map((_, i) => <span key={i}>[b]</span>)}
        </span>
      </header>
      <main id={styles.main}>
        <section id={styles.gridSection}>
          <div id={styles.grid}>
            <Link href="/tools-resources">
              <article className="link1">
                <div className={styles.outer}>
                  <h2>My Stupid Projects</h2>
                  <img src="/media/arrow.svg" className={styles.arrow} alt="Arrow right"/>
                </div>
                <div className={styles.inner}>
                  <img src="/media/tools.svg" alt="Tools icon"/>
                  <div>
                    <h3>Not Even Finished</h3>
                    <h3>They all suck</h3>
                  </div>
                </div>
              </article>
            </Link>
            <Link href="/inspiration">
              <article className="link2">
                <div className={styles.outer}>
                  <h2>My Socials</h2>
                  <img src="/media/arrow.svg" className={styles.arrow} alt="Arrow right"/>
                </div>
                <div className={styles.inner}>
                  <img src="/media/idea.svg" alt="Lightbulb idea icon"/>
                  <div>
                    <h3>discord</h3>
                    <h3>im bored</h3>
                  </div>
                </div>
              </article>
            </Link>
            <Link href="/learn">
              <article className="link3">
                <div className={styles.outer}>
                  <h2>Honorable Mentions</h2>
                  <img src="/media/arrow.svg" className={styles.arrow} alt="Arrow right"/>
                </div>
                <div className={styles.inner}>
                  <img src="/media/books.svg" alt="Books icon"/>
                  <div>
                    <h3>Thx Riley</h3>
                    <h3>W3Schools?</h3>
                  </div>
                </div>
              </article>
            </Link>
            <Link href="/people-agencies">
              <article className="link4">
                <div className={styles.outer}>
                  <h2>People</h2>
                  <img src="/media/arrow.svg" className={styles.arrow} alt="Arrow right"/>
                </div>
                <div className={styles.inner}>
                  <img src="/media/people.svg" alt="People icon"/>
                  <div>
                    <h3>Just me :(</h3>
                    <h3>I'm Lonely</h3>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
        <section id={styles.moreInfo}>
          <article className="more1">
            <h2 className="more11">What I<strong>Doooooo</strong></h2>
            <p className="more12">I don't really do anything, I live in boredom.</p>
          </article>
          <article className="more2">
            <h2 className="more21"><strong>My</strong> Creations</h2>
            <p className="more22">90% of the things I create are forked or <em>boring</em>. If you're interested: <Link href="tools-resources"><span className="link">here's my stupid creations</span></Link> please judge me evily. If you're interested in discovering who I am so you can kidnap me, <Link href="inspiration"><span className="link">here's my about me page</span></Link>. Finally, if you're looking for someone to help you with a project, too bad im busy.</p>
          </article>
        </section>
      </main>
    </div>
  )
}
