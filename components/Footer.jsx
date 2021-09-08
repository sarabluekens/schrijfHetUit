
import styles from "./Footer.module.css"

const Footer = () => {

    return ( 
        <footer  className={styles.footer}>
            <ul className={styles.footer__list}>
                <li  className={styles.footer__list__item}>SaraBluekens</li>
                <li  className={styles.footer__list__item}>Make it personal</li>
                <li  className={styles.footer__list__item}>Devine 2021</li>
            </ul>
        </footer>
     );
}

export default  Footer;