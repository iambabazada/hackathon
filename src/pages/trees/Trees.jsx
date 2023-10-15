import React, { useEffect, useState } from 'react'
import TreeUiCard from '../../components/treeUiCard/TreeUiCard'
import axios from 'axios'
import styles from './trees.module.css'

const Trees = () => {

    const [trees, setTrees] = useState()

    const getData = async () => {
        const response = await axios('/api/v1/trees')
        setTrees(response.data.content)
        console.log(response.data.content);
        return response
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <main className={styles.trees}>
            <div className={styles.trees_container}>
                {trees?.map((tree) => (
                    <TreeUiCard data={tree} key={tree.id} />
                ))}
            </div>
        </main>
    )
}

export default Trees