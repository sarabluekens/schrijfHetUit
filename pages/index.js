import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MoodButtons from '../components/MoodButtons'
import Metadata from '../components/Metadata'
import { useState } from "react";
import { createClient } from 'contentful-management'
import { useRouter } from 'next/router'
import Link from "next/link";


import { v4 as uuidv4 } from 'uuid';
import { bool } from 'prop-types'
import Url from '../components/Url'



const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const managementToken = "CFPAT-i_eQd5zEsppjxXM4h4DpgAOErAM6kwbXkDi0X-WA40Y";

// ---------------------------GetEntries------------------------------------

export async function getStaticProps() {
  const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
    managementToken: managementToken
  })
  const data = await client.getEntries({ content_type: 'message' });

  return {
    props: { messages: data.items },
    revalidate: 1,
  }
}
// ---------------------------ShowLink------------------------------------


//--------------------------MoodList--------------------------------------------
const moods = [
  {
    label: "happy",
    description: " Gelukkig ",
    index: 0,
    url: "/img/happyLogo3.png"

  },
  {
    label: "sad",
    description: " Verdrietig ",
    index: 1,
    url: "/img/sadLogo3.png"
  },
  {
    label: "angry",
    description: " Boos ",
    index: 2,
    url: "/img/angryLogo3.png"
  },
  {
    label: "love",
    description: " Verliefd ",
    index: 3,
    url: "/img/loveLogo3.png"
  },
  {
    label: "neutral",
    description: " Neutraal ",
    index: 4,
    url: "/img/neutraalLogo3.png"
  }
]

export default function Home({ messages }) {
  const [mood, setMood] = useState("neutral");
  const [url, setUrl] = useState("");
  const router = useRouter();
  //----------------------------CSS classes toggle------------------------------------------


  // ---------------------------CreateEntry------------------------------------

  let myuuid = uuidv4();
  // let showLink = false;

  const submit = (e) => {

    // console.log(myuuid);
    const client = createClient({
      accessToken: 'CFPAT-i_eQd5zEsppjxXM4h4DpgAOErAM6kwbXkDi0X-WA40Y'
    })
    e.preventDefault();
    client.getSpace('7jittotgbw6t')
      .then((space) => space.getEnvironment('master'))
      .then((environment) => environment.createEntry('message', {
        fields: {
          title: {
            'en-US': e.target.title.value
          },
          slug: {
            'en-US': myuuid
          },
          mood: {
            'en-US': e.target.lastChild.innerHTML
          },
          letter: {
            'en-US': e.target.message.value
          },
        }
      }))
      .then((entry) => entry.publish())


      .then((entry) => {
        const showUrl = window.location.href + myuuid
        setUrl(showUrl)
      })


      .catch(console.error)
    console.log(myuuid);

  }

  //kdsdvndsljnzrljnbs   submit
  let colorScheme = mood;

  let classHappy = styles.happy;
  let classSad = styles.sad;
  let classNeutral = styles.neutral;
  let classAngry = styles.angry;
  let classLove = styles.love;

  return (
    <>
      <Metadata page="Home" />
      <Navbar />
      <main className={colorScheme === "happy" ? classHappy : colorScheme === "sad" ? classSad : colorScheme === "love" ? classLove : colorScheme === "angry" ? classAngry : classNeutral}>
        <Header />

        <MoodButtons className={styles.buttons} list={moods} value={mood} onRadioChange={(value) => setMood(value)} />

        {/* FORMbackup */}
        <section className={styles.form}>
          <h1 className={styles.title}> Schrijf hier wat je kwijt wilt</h1>

          <form onSubmit={submit} className={styles.form} >

            <label htmlFor="title">Titel</label>
            <input className={styles.form__inputfield__title} id="title" type="text" name="title" placeholder="Titel van mijn brief" required />

            <label htmlFor="message">Schrijf het uit! </label>
            <textarea className={styles.form__inputfield__text} id="title" id="message" name="message" rows="20" cols="50" placeholder="hier uw boodschap" required />
            <input className={styles.form__button} type="submit" value="Van je af smijten" />
            <label className={styles.hidden} name="kleur">{colorScheme}</label>
          </form>
          <div className={styles.wegwijzer}>
            <p>Wil je jouw boodschap toch met iemand delen? Kopieer dan volgende link:</p>
            <h2 className={styles.link} onChange={(url) => setUrl(url)}> {url} </h2>
          </div>
        </section>

        {/* FORMbackup */}


        {/* <Url showLink={showLink} myuuid={myuuid} onLinkChange={(myuuid) => setShowLink(myuuid)} /> */}

      </main>
      <Footer />
    </>
  )
}
