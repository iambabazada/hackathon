import React from 'react'
import styles from './basket.module.css'
import Button from '../button/Button'
import { useSelector } from 'react-redux'
import BasketItem from './BasketItem'

const Basket = () => {

    const cartItems = useSelector(state => state.basket.basket)

    const totalCount = useSelector((state) => state.basket.totalCount)

    return (
        <div className={styles.basket}>
            <div className={styles.cartItems}>
                {cartItems.map((item, index) => (
                    <BasketItem key={index} item={item} />
                ))}
            </div>
            {
                totalCount === 0 && (
                    <div>
                        Səbət Bosdur
                    </div>
                )
            }
        </div>
    )
}

export default Basket