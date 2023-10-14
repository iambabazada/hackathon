import React from 'react'
import styles from '../homeUiCard/homeUiCard.module.css'
import Image from '../../../../assets/images/Rectangle 14.png'

const HomeUiCard = () => {
  return (
    <div className={styles.card_container}>
       <div className={styles.right_side}>
            <div className={styles.box}>
            <div className={styles.details}>
                     Title
                     Description
                </div>
                <div className={styles.img}>
                    <img src={Image} alt="" />
                </div>
            </div>
       </div>
       <div className={styles.left_side}></div>
    </div>
  )
}

export default HomeUiCard