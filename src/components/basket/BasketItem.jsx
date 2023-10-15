import React from 'react'
import styles from './BasketItem.module.css'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { compareName, count, decrementCart, deleteFromBasket, incrementCart } from '../../redux/basketSlice'
import { useNavigate } from 'react-router'

const BasketItem = ({ item }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const compireName = useSelector((state) => state.basket.compareName)

    const handleDeleteCart = () => {
        dispatch(deleteFromBasket(item.id))
    }

    const handleDecrement = () => {
        dispatch(decrementCart(item.id))
    }

    const handleIncrement = () => {
        dispatch(incrementCart(item.id))
    }

    const handleField = () => {
        dispatch(compareName(item.treeName))
        navigate('/eraziler')
        console.log("salam", compireName);
        dispatch(count(item.quantity))
    }

    return (
        <div className={styles.basket_item}>
            <div className={styles.basket_img}>
                <img src={item?.image} alt="" />
            </div>
            <div className={styles.basket_info}>
                <h3>
                    {item.treeName}
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
                    ₼ {item?.price}
                </span>
                <button onClick={handleDeleteCart}>
                    X
                </button>
                <button onClick={handleField}>
                    sifaris et
                </button>
            </div>
        </div>

    )
}

export default BasketItem