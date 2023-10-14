import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './header.module.css'
import Button from '../button/Button'
import Logo from '../../assets/Logo.svg'
import Basket from '../basket/Basket'
import CartImg from '../../assets/cart.svg'
import { useSelector } from 'react-redux'



const Header = () => {
    const menu = [
        {
            url: '/',
            name: "Ana Səhifə"
        },
        {
            url: '/eraziler',
            name: "Ərazilər"
        },
        {
            url: '/reiting',
            name: "Reyting"
        },
        {
            url: '/agaclar',
            name: "Ağaclar"
        },

    ]

    const [basket, setBasket] = useState(false)

    const totalCount = useSelector((state) => state.basket.totalCount)



    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <img src={Logo} alt="" />
                <span className={styles.logo}>ecoFriends</span>
            </div>
            <ul className={styles.menu}>
                {menu.map((item, i) => (
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? `${styles.pending}` : isActive ? `${styles.active}` : ""
                    } to={item.url} key={i}>
                        <li>
                            {item.name}
                        </li>
                    </NavLink>
                ))}
            </ul>
            <div className={styles.actions}>
                <div className={styles.cart}>
                    <button onClick={() => setBasket(!basket)}>
                        <span className={styles.total_count}>
                            {totalCount}
                        </span>
                        <img src={CartImg} className={styles.cart_icon} alt="" />
                    </button>
                    {
                        basket && (
                            <div className={styles.cart_modal}>
                                <Basket />
                            </div>
                        )
                    }
                </div>
                <div className={styles.btn}>
                    <Button width='lg'>
                        Daxil ol
                    </Button>
                </div>

            </div>
        </header>
    )
}

export default Header