import React from 'react'
import styles from '../footer/Footer.module.css'
import Logo from '../../assets/Logo.svg'
import Location from '../../assets/Map_Pin.svg'
import Mail from '../../assets/mail-opened.svg'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_header}>
                <div className={styles.footer_logo}>
                    <img src={Logo} alt="" />
                    <h1>EcoFriends</h1>
                </div>
                <p className={styles.footer_description}>Təbiəti qorumaq hər bir vətəndaşın borcudur !</p>
                </div>
                <div className={styles.map_container}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5014035094164!2d49.855450375591815!3d40.397741856795435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4214c8dd0f%3A0x549aebbdf582d1e3!2sOdlar%20Yurdu%20Universiteti!5e0!3m2!1sen!2saz!4v1696588729033!5m2!1sen!2saz" width="100%" height="100%" style={{ border: 0 }}></iframe>
                </div>
                <div className={styles.contact_container}>
                    <h4>Contact</h4>
                    <a href="#" className={styles.contact}>
                        <img src={Location} alt="" />
                        <span>Azerbaijan, Baku, OYU</span>
                    </a>
                    <a href="#" className={styles.contact}>
                        <img src={Mail} alt="" />
                        <span>info@dostudent.az</span>
                    </a>
                </div>
            </footer>
            <div className={styles.copyright}>
                © 2023 dostudents, All Rights Reserved
            </div>
        </>
    )
}

export default Footer