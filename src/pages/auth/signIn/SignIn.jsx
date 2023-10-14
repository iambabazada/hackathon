import React from 'react'
import styles from '../signIn/Signin.module.css'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import LoginImage from '../../../assets/images/Other 03.png'

const loginSchema = Yup.object({
    email: Yup.string().required('Email cannot be empty').email('Enter a valid email adress'),
    password: Yup.string().min(8, "Must be at least 8 characters").required('Password cannot be empty'),
});

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: loginSchema,
        validationOnMount: true

    })


    return (
        <div className={styles.container}>
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