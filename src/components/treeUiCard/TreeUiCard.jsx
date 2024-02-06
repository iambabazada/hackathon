import React from 'react'
import styles from './treeuicard.module.css'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket } from '../../redux/basketSlice'

const TreeUiCard = ({ data }) => {
    const dispatch = useDispatch()


    const handleToCart = () => {
        dispatch(addToBasket(data))
    }

    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <img src={data.image} alt="" />
            </div>
            <div className={styles.card_body}>
                <h2>{data?.treeName}</h2>
                <p>
                    {data.description}
                </p>
            </div>
            <div className={styles.card_footer}>
                <span>
                    ₼ {data?.price}
                </span>
                <Button width='xl' onClick={handleToCart}>
                    Səbətə əlavə et
                </Button>
            </div>
        </div>
    )
}

export default TreeUiCard