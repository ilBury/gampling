import styles from './Page.module.scss';
import MovingCoins from '../MovingCoins/MovingCoins';
import Blog from '../Blog/Blog';
import { useEffect } from 'react';

function Page({value}) {

  

    useEffect(() => {
        console.log(value);
    }, [value])

    return (
        <>
           <div className={styles.container} style={value ? {'display': 'none'} : {'display': 'flex'}} >
                <div className={styles.banner}>
                    <h1 className={styles.title}>HOUSE OF <span style={{'color': '#478BF9'}}>GAMBLING</span></h1>
                    <span className={styles.subtitle}>Raise your ROI with direct advertiser</span>
                    <button className={styles.btn}>Become a Partner</button>
                    <div className={styles.glareLeft}></div>
                </div>

                <MovingCoins />
                
                <div className={styles.blur}></div>

                <Blog />
                
                    
            </div>

            <div className={styles.burger} style={value ? {'display': 'flex'} : {'display': 'none'}}>
                <div className={styles.btns_nav}>
                    <button>About us</button>
                    <button>Brands</button>
                    <button>Commissions</button>
                    <button>News</button>
                    <button>Contact us</button>
                    <button>Careers</button>
                </div>
                <div className={styles.btns}>
                    <button style={{'backgroundColor': '#1E1231', 'borderColor': '#9DADF2'}}>LOG IN</button>
                    <button style={{'backgroundColor': '#478BF9'}}>SIGN UP</button>
                </div>
            </div>
        </>
     
    )
}


export default Page;