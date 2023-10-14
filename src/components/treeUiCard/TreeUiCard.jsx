import React from 'react'
import styles from './treeuicard.module.css'
import Button from '../button/Button'

const TreeUiCard = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <img src={data.images[0]} alt="" />
            </div>
            <div className={styles.card_body}>
                <h2>{data?.brand}</h2>
                <p>
                    {data.description.split(' ').slice(0, 9).join(' ') + "..."}
                </p>
            </div>
            <div className={styles.card_footer}>
                <span>
                    ₼ 50
                </span>
                <Button width='xl'>
                    Səbətə əlavə et
                </Button>
            </div>
        </div>
    )
}

export default TreeUiCard