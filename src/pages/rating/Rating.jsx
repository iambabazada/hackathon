import React, { useEffect, useState } from 'react'
import styles from './rating.module.css'
import { useSelector } from 'react-redux'
import { async } from 'q'
import axios from 'axios'

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
                rozetta
            </div>
        </div>
    )
}

export default Rating