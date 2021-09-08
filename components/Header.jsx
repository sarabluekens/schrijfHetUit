import React from 'react';
import PropTypes from "prop-types";
import styles from "./Header.module.css";

import Image from 'next/image'

const Header = () => {
    return (
        <section className={styles.header}>
            <h1 className={styles.header__title}> Schrijf het uit! </h1>
            <div className={styles.flex}>
                <Image className={styles.header__img} src="/img/pluim.png" width="885" height="782" />

                <p className={styles.header__description}>
                    De wereld staat op zijn kop. In deze geïsoleerde tijden was mentale gezondheid nog nooit zo belangrijk!
                    Toch wordt het steeds moeilijker om je gevoelens en frustraties te uitten. Zeker in de online wereld van vandaag.

                    Daarom bied ik deze pagina aan in de hoop het iets gemakkelijker te maken deze gevoelens te verwerken.
                    Schrijf hier uit wat op je hart ligt, maar je niet kan zeggen.
                </p>

            </div>
        </section>
    );
}

export default Header;
