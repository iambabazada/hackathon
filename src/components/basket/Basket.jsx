import React from 'react'
import styles from './basket.module.css'
import Button from '../button/Button'
import { useSelector } from 'react-redux'
import BasketItem from './BasketItem'

const Basket = () => {

    const cartItems = useSelector(state => state.basket.basket)


    return (
        <div className={styles.basket}>
            <div className={styles.cartItems}>
                {cartItems.map((item, index) => (
                    <BasketItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Basket