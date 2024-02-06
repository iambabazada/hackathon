import React, { useEffect, useState } from 'react'
import styles from './rating.module.css'
import { useSelector } from 'react-redux'
import { async } from 'q'
import axios from 'axios'
import Badge_1 from '../../assets/images/badge_1.png'
import Badge_2 from '../../assets/images/badge_2.png'
import Badge_3 from '../../assets/images/badge_3.png'

const Rating = () => {

    const [data, setData] = useState()

    const users = async () => {
        const response = await axios('/api/v1/users/rating')
        console.log(response.data);
        setData(response.data)
    }

    useEffect(() => {
        users()
    }, [])

    // data.sort((a, b) => b.treeCount - a.treeCount);


    return (
        <main className={styles.rating}>
            {data?.map((item) => (
                <RatingItem key={item.id} data={item} />
            ))}
        </main>
    )
}




export const RatingItem = ({ data }) => {

    console.log("item", data);

    return (
        <div className={styles.rating_item}>

            <div className={styles.user_info}>
                <span>
                    #{data.id}
                </span>
                <h3>
                    {data?.username}
                </h3>
            </div>
            <div>
                <span>
                    {data?.treeCount} agac
                </span>
            </div>
            <div>
                {data?.treeCount >= 15} (
                <img src={Badge_1} alt="" />
                )
                {data?.treeCount >= 35} (
                <img src={Badge_2} alt="" />
                )
                {data?.treeCount >= 1} (
                <img src={Badge_3} alt="" />
                )
            </div>
        </div>
    )
}

export default Rating