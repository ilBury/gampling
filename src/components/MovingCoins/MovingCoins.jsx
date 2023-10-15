import {useState } from 'react';
import styles from './MovingCoins.module.scss';
import shield from '../../images/Shield.svg';
import m from '../../images/M.svg';
import dollar from '../../images/dollar.svg';
import soccer from '../../images/Soccer.svg';
import mBlue from '../../images/Mblue.svg';
import soccerWhite from '../../images/SoccerWhite.svg';
import world from '../../images/World.svg';
import timer from '../../images/Timer.svg';
import crown from '../../images/Crown.svg';
import dollarHorizontal from '../../images/dollarHorizontal.svg';
import worldHorizontal from '../../images/WorldHorizontal.svg';

function MovingCoins() {

    const [firstImages] = useState([shield, dollar, soccer, m, shield, dollar, soccer, m, shield, dollar, soccer, m]);
    const [secondImages] = useState([m, timer, crown, world, m, timer, crown, world, m, timer, crown, world]);
    const [thirdImages] = useState([dollar, mBlue, shield, soccerWhite, dollar, mBlue, shield, soccerWhite, dollar, mBlue, shield, soccerWhite]);

    return (
        <div className={styles.animation}>
            
            <div className={styles.firstCol}>
                {firstImages.map((el, id) => {

                    return (
                        el === dollar ? 
                            <picture key={id} >
                                <source srcSet={dollarHorizontal} media='(max-width: 500px)'  />
                                <source srcSet={el} />
                                <img src={el}  alt="#"  />
                            </picture> :
                            <img 
                                src={el} 
                                key={id}                  
                                alt='#' 
                                className={styles.specialIcon}
                            />
                        
                    )
                })}
            </div>
            
            <div className={styles.secondCol}>
                {secondImages.map((el, id) => {
                    return (
                        el === world ? 
                        <picture key={id} >
                            <source srcSet={worldHorizontal} media='(max-width: 500px)'  />
                            <source srcSet={el} />
                            <img src={el}  alt="#"  />
                        </picture> :
                        <img 
                            src={el} 
                            key={id}                  
                            alt='#' 
                            className={styles.specialIcon}
                        />
                    )
                })}
            </div>
                
            <div className={styles.thirdCol}>
                {thirdImages.map((el, id) => {
                    return (
                        el === dollar ? 
                            <picture key={id} >
                                <source srcSet={dollarHorizontal} media='(max-width: 500px)'  />
                                <source srcSet={el} />
                                <img src={el}  alt="#"  />
                            </picture> :
                            <img 
                                style={el === dollar ? 
                                    {'filter': 'invert(94%) sepia(10%) saturate(1396%) hue-rotate(184deg) brightness(101%) contrast(113%)'}
                                    : {'filter': 'none'}} 
                                src={el} 
                                className={styles.specialIcon}
                                key={id} 
                                alt='#' 
                            />
                    )
                })}
            </div>   
        </div>
    )
}

export default MovingCoins;