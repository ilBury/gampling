import styles from './Header.module.scss';
import planetLanguage from '../../images/planetLenguage.svg';
import menu from '../../images/menu.svg';
import closeMenu from '../../images/Close.svg';
import { useState } from 'react';

function Header({value, set}) {

    const [lang, setLeng] = useState(true);

    

  

    return (
        <>
            <header className={styles.header}>

                <div className={styles.nav}>
                    <a href="/#">
                        About us
                    </a>
                    <a href="/#">
                        Brands
                    </a>
                    <a href="/#">
                        Commisions
                    </a>
                    <a href="/#">
                        News
                    </a>
                    <a href="/#">
                        Contact us              
                    </a>
                    <a href="/#">
                        Careers
                    </a>
                </div>

                <div className={styles.btns}>
                    <button className={styles.btn_lang} onClick={() => setLeng(!lang)}>
                        <img className={styles.lang} src={planetLanguage} alt="#" />
                        <span>{lang ? 'en' : 'ru'}</span>
                    </button>
                    <button>
                        log in
                    </button>
                    <button className={styles.btn}>
                        sign up
                    </button>
                    <button className={styles.btn_menu} onClick={() => set(!value)}>
                        <img src={value ? closeMenu : menu} alt="#" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;