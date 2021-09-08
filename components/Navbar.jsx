import styles from "./Navbar.module.css";
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {

    return ( 
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <Image className={styles.nav__list__img} src="/img/logo.png" width="100" height="100"/>
                <Link href="/"><li className={styles.nav__list__item} >Bericht maken</li></Link>
                <Link href="/about"><li className={styles.nav__list__item} >0ver</li></Link>
            </ul>
        </nav>
     );
}