import React from 'react'
import Hero from './components/hero/Hero'
import styles from './Home.module.css'
import HomeUiCard from './components/homeUiCard/HomeUiCard'

const Home = () => {
    return (
        <main className={styles.home}>
            <Hero />
            <HomeUiCard />
        </main>
    )
}

export default Home