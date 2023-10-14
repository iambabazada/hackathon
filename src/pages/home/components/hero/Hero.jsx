import React from 'react'
import styles from './hero.module.css'
import HeroImg from '../../../../assets/images/hero_img.png'
import Button from '../../../../components/button/Button'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.left}>
                <h2>
                    Vos travaux moins chers grâce aux aides financières
                </h2>
                    <p>
                        Nous vous accompagnons tout au long de votre démarche dé rénovation thermique et de transition énergétique sans prise de tête.
                    </p>
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
    )
}

export default Hero