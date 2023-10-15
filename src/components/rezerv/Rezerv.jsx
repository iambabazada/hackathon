import React, { useEffect, useState } from 'react'
import fieldImg from '../../assets/images/field.jpeg'
import styles from './rezerv.module.css'
import { async } from 'q'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { compareName } from '../../redux/basketSlice'
import TreeImg from '../../assets/images/tree.png'
import GreenTree from '../../assets/images/greentree.png'
import Button from '../../components/button/Button'
import { ToastContainer, toast } from 'react-toastify'



const Rezerv = ({ data }) => {
    console.log("sdcdsc", data);
    const dispatch = useDispatch()

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

    const basketCount = useSelector((state) => state.basket.count)



    console.log("basket quantity", basketCount);

    const user = useSelector((state) => state.auth.users)
    const token = useSelector((state) => state.auth.token)

    const [popUp, setPopUp] = useState(false)

    const isBasketOpen = useSelector((state) => state.basket.isBasketOpen)


    const handleID = () => {
        getTretorieId()
        console.log("rfdv");
        if (compareName === terrioriName) {
            setMessage(`${compareName} agac ekile biler`)
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

    const handleOrder = () => {
        toast.success("İstəyiniz qeydə alındı", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setPopUp(false)

        // dispatch(isBasketOpen(false))

        const postCount = async () => {
            const response = await axios.put(`/api/v1/users/${user.id}/buytree`, { treeCount: basketCount }, {
                headers: {
                    'Authorization': `Bearer ${token}` // Set the token in the Authorization header
                }
            });

            return response
        }

        postCount()
    }


    return (
        <div className={styles.img_container}>
            <ToastContainer />
            <img src={data.image} className={styles.img} alt="" />
            <div className={styles.trees}>
                {trees.map((tree) => (
                    <div onMouseLeave={() => setOpen(!open)} onMouseEnter={() => setOpen(!open)} className={styles.tree}>
                        <img src={tree.tree} onClick={tree.onClick} alt="" />
                    </div>

                ))}
                {popUp && (
                    <div className={styles.popup}>
                        <div className={styles.popup_overlay}>
                            <label htmlFor="">Ağacı adlandırın</label>
                            <input type="text" className={styles.input} />
                            <Button width={'100%'} onClick={handleOrder}>
                                İməclik tədbirində Şəxsən ək
                            </Button>
                            <Button width={'100%'} onClick={handleOrder}>
                                Bağban əksin
                            </Button>

                        </div>
                    </div>

                )}
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



        </div>
    )
}

export default Rezerv