import React from 'react'
import styles from './rating.module.css'

const Rating = () => {


    return (
        <main className={styles.rating}>
            <RatingItem />
            <RatingItem />
            <RatingItem />
            <RatingItem />
            <RatingItem />
        </main>
    )
}




export const RatingItem = () => {
    return (
        <div className={styles.rating_item}>

            <div className={styles.user_info}>
                <span>
                    #1
                </span>
                <img src="" alt="" className={styles.user_img} />
                <h3>
                    Aysel Məmmədova
                </h3>
            </div>
            <div>
                <span>
                    53 agac
                </span>
            </div>
            <div>
                rozetta
            </div>
        </div>
    )
}

export default Rating