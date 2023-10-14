import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './header.module.css'
import Button from '../button/Button'
import Logo from '../../assets/Logo.svg'


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

    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <img src={Logo} alt="" />
                ecoFriends
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
                    cart
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