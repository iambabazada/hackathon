import React from 'react'
import styles from './BasketItem.module.css'
import Button from '../button/Button'
import { useDispatch } from 'react-redux'
import { decrementCart, deleteFromBasket, incrementCart } from '../../redux/basketSlice'

const BasketItem = ({ item }) => {

    const dispatch = useDispatch()

    const handleDeleteCart = () => {
        dispatch(deleteFromBasket(item.id))
    }

    const handleDecrement = () => {
        dispatch(decrementCart(item.id))
    }

    const handleIncrement = () => {
        dispatch(incrementCart(item.id))
    }

    return (
        <div className={styles.basket_item}>
            <div className={styles.basket_img}>
                <img src={item?.images[0]} alt="" />
            </div>
            <div className={styles.basket_info}>
                <h3>
                    {item.brand}
                </h3>
                <div>
                    <button
                        onClick={handleDecrement}
                    >
                        -
                    </button>
                    {item?.quantity}
                    <button onClick={handleIncrement}>
                        +
                    </button>
                </div>
            </div>
            <div className={styles.order}>
                <span>
                    ₼ 150
                </span>
                <button onClick={handleDeleteCart}>
                    X
                </button>
            </div>
        </div>

    )
}

export default BasketItem