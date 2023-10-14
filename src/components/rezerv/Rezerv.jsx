import React, { useState } from 'react'
import fieldImg from '../../assets/images/field.jpeg'
import styles from './rezerv.module.css'

const Rezerv = () => {

    const trees = [
        {
            tree: '1',
            by: "Fuad Haciyev"
        },
        {
            tree: '2',
            by: "Elcin Memmedov"
        },
        {
            tree: '3',
            by: "Rufet Mustafazadə"
        },
        {
            tree: '4',
            by: "Nigar Əliyeva"
        },
        {
            tree: '5',
            by: "Aysel Quliyeva"
        },
        {
            tree: '6',
            by: "Cavid Babayev"
        },
        {
            tree: '7',
            by: "Fariz Babayev"
        },
        {
            tree: '8',
            by: "Rustəç Namiqli"
        },
        {
            tree: '9',
            by: "Elcin Əliyev"
        },
        {
            tree: '10',
            by: "Fuad Haciyev"
        }
    ]

    const [open, setOpen] = useState(false)

    // const handleSelected = () => {
    //     setOpen(!open)
    // }

    return (
        <div className={styles.img_container}>
            <img src={fieldImg} alt="" className={styles.img} />
            <div className={styles.trees}>
                {trees.map((tree) => (
                    <div onMouseLeave={() => setOpen(!open)} onMouseEnter={() => setOpen(!open)} className={styles.tree}>
                        {tree.tree}
                        {
                            open ? (
                                <div className={styles.by_user}>
                                    {tree.by}
                                </div>
                            ) : null
                        }
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Rezerv