import React from 'react'
import Hero from './components/hero/Hero'
import styles from './Home.module.css'
import Rezerv from '../../components/rezerv/Rezerv'

const Home = () => {
    return (
        <main className={styles.home}>
            <Hero />
            <Rezerv />
        </main>
    )
}

export default Home