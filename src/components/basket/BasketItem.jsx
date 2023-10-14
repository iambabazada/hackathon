import React from 'react'
import styles from './BasketItem.module.css'
import Button from '../button/Button'

const BasketItem = ({ item }) => {
    return (
        <div>
            <div className={styles.basket_img}>
                <img src={item?.images[0]} alt="" />
            </div>
            <div className={styles.basket_info}>
                <h3>
                    {item.brand}
                </h3>
                <div>
                    +
                    3
                    -
                </div>
            </div>
            <div className={styles.order}>
                <span>
                    ₼ 150
                </span>
                <Button width='lg' className={styles.btn}>
                    sifariş et
                </Button>
            </div>
        </div>

    )
}

export default BasketItem