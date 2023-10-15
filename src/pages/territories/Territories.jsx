import React, { useEffect, useState } from 'react'
import Rezerv from '../../components/rezerv/Rezerv'
import axios from 'axios'
import styles from './Territories.module.css'

const Territories = () => {
    const [terriories, setTerriories] = useState()

    const getTeritories = async () => {
        const response = await axios('/api/v1/territories')
        setTerriories(response.data.content)
    }

    useEffect(() => {
        getTeritories()
    }, [])

    return (
        <main>
            <div className={styles.territorie}>
                {
                    terriories?.slice(6, 8).map((terriorie, i) => (
                        <Rezerv data={terriorie} />
                    ))
                }
            </div>
        </main>
    )
}

export default Territories