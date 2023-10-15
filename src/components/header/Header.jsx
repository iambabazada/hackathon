import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './header.module.css'
import Button from '../button/Button'
import Logo from '../../assets/Logo.svg'
import Basket from '../basket/Basket'
import CartImg from '../../assets/cart.svg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/authSlice'



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

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [basket, setBasket] = useState(false)

    const totalCount = useSelector((state) => state.basket.totalCount)

    const isAuth = useSelector((state) => state.auth.isAuth)


    const [openUser, setOpenUser] = useState(false)

    const handleUser = () => {
        setOpenUser(!openUser)
    }

    const handleLogout = () => {
        dispatch(logout())
    }

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
                    {!isAuth ? (
                        <Button width='lg' onClick={() => navigate('/daxil-ol')}>
                            Daxil ol
                        </Button>

                    ) : (
                        <>
                            <button onClick={handleUser}>
                                A
                            </button>
                            {
                                openUser && (

                                    <div>
                                        <button onClick={handleLogout}>
                                            cixis
                                        </button>
                                    </div>
                                )
                            }
                        </>
                    )}
                </div>

            </div>
        </header>
    )
}

export default Header