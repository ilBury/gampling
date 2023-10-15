import styles from './Footer.module.scss';
import union from '../../images/Union2.svg';
import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';
import youtube from '../../images/youtube.svg';
import tiktok from '../../images/tiktok.svg';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';


function Footer({value}) {

    const arr = [
        twitter, 
        facebook, 
        instagram, 
        linkedin, 
        youtube, 
        tiktok, 
        telegram, 
        vk
    ];
    

    return (
        <footer style={value ? {'display': 'none'} : {'display': 'flex'}} className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <a href="/#">
                        Terms & Conditions
                    </a>
                    <a href="/#">
                        Cookies
                    </a>
                    <a href="/#">
                        Contacts
                    </a>
                    <a href="/#">
                        Careers
                    </a>
                    <a href="/#">
                        Brand Guide              
                    </a>   
                </div>
                <div className={styles.socials}>
                    <span>Our social media:</span>
                    <div className={styles.socials_btns}>
                        {arr.map((el) => {
                            return (
                                <button   
                                 key={el} 
                                 className={styles.social}>
                                    <img src={union} alt="#" />
                                    <img 
                                     className={styles.icon} 
                                     src={el} 
                                     alt="#" />
                                </button>
                            )
                        })}   
                    </div>
                </div>
                
            </div>
            
        </footer>
    )
}

export default Footer;