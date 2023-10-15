import React, { useEffect, useState } from 'react'
import fieldImg from '../../assets/images/field.jpeg'
import styles from './rezerv.module.css'
import { async } from 'q'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { compareName } from '../../redux/basketSlice'
import TreeImg from '../../assets/images/tree.png'
import GreenTree from '../../assets/images/greentree.png'
import { Popover } from '@headlessui/react'

const Rezerv = ({ data }) => {
    console.log("sdcdsc", data);

    const basketItem = useSelector((state) => state.basket.basket)



    const [open, setOpen] = useState(false)

    const [tretorieid, setTretorieId] = useState()

    const [terrioriName, setTerrioriName] = useState()

    const getTretorieId = async (e) => {
        const response = await axios(`/api/v1/territories/${data.id}`)
        setTretorieId(tretorieid)
        console.log("dcds", response.data.treeName);
        setTerrioriName(response.data.treeName)
        return response
    }

    const [message, setMessage] = useState('')



    const compareName = useSelector((state) => state.basket.compareName)

    console.log("dcsd", compareName);

    const [popUp, setPopUp] = useState(false)


    const handleID = () => {
        getTretorieId()
        console.log("rfdv");
        if (compareName === terrioriName) {
            setPopUp(true)

        }
        else {
            setMessage(`${compareName} agac ekile bilmez`)
        }

    }

    const trees = [
        {
            tree: GreenTree,
            by: "Fuad Haciyev"
        },
        {
            tree: GreenTree,
            by: "Elcin Memmedov"
        },
        {
            tree: GreenTree,
            by: "Rufet Mustafazadə"
        },
        {
            tree: GreenTree,
            by: "Nigar Əliyeva"
        },
        {
            tree: GreenTree,
            by: "Aysel Quliyeva"
        },
        {
            tree: TreeImg,
            by: "Cavid Babayev",
            onClick: handleID
        },
        {
            tree: GreenTree,
            by: "Fariz Babayev"
        },
        {
            tree: GreenTree,
            by: "Rustəç Namiqli"
        },
        {
            tree: TreeImg,
            by: "Elcin Əliyev",
            onClick: handleID
        },
        {
            tree: GreenTree,
            by: "Fuad Haciyev"
        }
    ]


    return (
        <div className={styles.img_container}>
            <img src={data.image} className={styles.img} alt="" />
            <div className={styles.trees}>
                {trees.map((tree) => (
                    <div onMouseLeave={() => setOpen(!open)} onMouseEnter={() => setOpen(!open)} className={styles.tree}>
                        <img src={tree.tree} onClick={tree.onClick} alt="" />
                    </div>
                ))}
                <button onClick={handleID}>
                    <img src={TreeImg} className={styles.empty_tree} alt="" />
                </button>
                <button onClick={handleID}>
                    <img src={TreeImg} className={styles.empty_tree} alt="" />
                </button>
                {
                    tretorieid
                }
            </div>
            <div className={styles.message}>
                {message}
            </div>

            {popUp & (
                <Popover className="relative">
                    <Popover.Button>Solutions</Popover.Button>

                    <Popover.Panel className="absolute z-10">
                        <div className="grid grid-cols-2">
                            <a href="/analytics">Analytics</a>
                            <a href="/engagement">Engagement</a>
                            <a href="/security">Security</a>
                            <a href="/integrations">Integrations</a>
                        </div>

                        <img src="/solutions.jpg" alt="" />
                    </Popover.Panel>
                </Popover>

            )}

        </div>
    )
}

export default Rezerv