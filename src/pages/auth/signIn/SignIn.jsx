import React from 'react'
import styles from '../signIn/Signin.module.css'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import LoginImage from '../../../assets/images/Other 03.png'
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            dispatch(login(values))
                .unwrap()
                .then(() => {
                    toast.success("Xoş Gəlmisiniz :)", {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    setTimeout(() => {
                        navigate('/')
                    }, 3000)
                })
                .catch((err) => {
                    console.log(err);


                    toast.error(err.message, {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })

        },


    })


    return (
        <div className={styles.container}>
            <ToastContainer />
            <div className={styles.login_field}>
                <div className={styles.login_box}>
                    <h4>Xoş Gəlmisiniz!</h4>
                    <form className={styles.login_form} onSubmit={formik.handleSubmit}>
                        <label htmlFor="email">İstifadəçi adı vəya E-Mail</label>
                        <input
                            type="text"
                            className={styles.name}
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email ? <ErrorMessage>{formik.errors.email}</ErrorMessage> : null}

                        <label htmlFor="password">Şifrə</label>
                        <input
                            type="password"
                            className={styles.password}
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password ? <ErrorMessage>{formik.errors.password}</ErrorMessage> : null}


                        <div className={styles.submit_button}>
                            <button type='submit' className={styles.button} onClick={formik.handleSubmit}>Login</button>
                        </div>
                    </form>
                    <span>
                        Lorem ipsum dolor sit.? <Link to="/qeydiyyat">Register</Link>
                    </span>
                </div>
            </div>
            <div className={styles.img_box}><img src={LoginImage} alt="" /></div>

        </div>
    )
}

const ErrorMessage = ({ children }) => {
    return <span className={styles.error}>{children}</span>
}

export default SignIn