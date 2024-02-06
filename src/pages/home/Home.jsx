import React from 'react'
import Hero from './components/hero/Hero'
import styles from './Home.module.css'
import UiCard from './components/uiCard/UiCard'

const Home = () => {
    return (
        <main className={styles.home}>
            <Hero />
            <UiCard />
        </main>
    )
}

export default Home