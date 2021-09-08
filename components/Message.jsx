
import Link from "next/link";
import styles from "./Message.module.css"

export default function Message ({message, link}) {
  const {title, letter, mood, slug} = message.fields;

  return (
    <div className={styles.message}>
        {/* {console.log(slug)} */}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{letter}</p>
        <p className={styles.mood}>Gekozen gevoel:{mood}</p>
        <Link className={styles.link} href={link}>Go Home</Link>
   
    </div>
  )
}