import React from 'react'
import Hero from './components/hero/Hero'
import styles from './Home.module.css'

const Home = () => {
    return (
        <main className={styles.home}>
            <Hero />
        </main>
    )
}

export default Home