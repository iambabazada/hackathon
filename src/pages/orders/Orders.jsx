import React from 'react'
import styles from './orders.module.css'
import { useSelector } from 'react-redux'

const Orders = () => {

    const data = [
        { name: "Küknar ağacı", age: 19, tarix: "02.10.23", status: "Uğurlu" },
        { name: "Megha", age: 19, tarix: "02.10.23", status: "Uğursuz" },
        { name: "Subham", age: 25, tarix: "02.10.23", status: "Uğurlu" },
    ]

    const orders = useSelector((state) => state.basket.basket)

    console.log(orders);

    return (
        <main className={styles.orders}>
            <table className={styles.table}>
                <tr className={styles.th_container}>
                    <th>Ağac adı</th>
                    <th>Sayı</th>
                    <th>Tarix</th>
                    <th>Status</th>
                </tr>
                {orders.map((val, key) => {
                    return (
                        <tr key={key} className={styles.td_container}>
                            <td>{val.title}</td>
                            <td>{val.quantity}</td>
                            <td>{val.rating}</td>
                            <td>{val.stock}</td>
                        </tr>
                    )
                })}
            </table>
        </main>
    )
}

export default Orders