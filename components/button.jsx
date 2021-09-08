const Button = ({slug}) => {
    return ( 
        <Link href={slug}>
        <a className={styles.card}>
        <p>Wil je jouw boodschap toch met iemand delen? Klik dan hier</p>
        <h2>Delen &rarr;</h2>
        </a>
      </Link>
     );
}
 
export default Button;


