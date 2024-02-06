import React from 'react';
import styles from './hero.module.css';
import HeroImg from '../../../../assets/images/hero_img.png';
import Button from '../../../../components/button/Button';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={`${styles.left} animate__fadeInDownBig`}>
                <h2>
                    E-commercional Startup
                </h2>
                <div className={styles.btns}>
                    <Button width='lg'>
                        Ağac al
                    </Button>
                    <Button width='lg'>
                        Ərazi seç
                    </Button>
                </div>
            </div>
            <div className={styles.right}>
                <img src={HeroImg} alt="" />
            </div>
        </div>
    );
}

export default Hero;
