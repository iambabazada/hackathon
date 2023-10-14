import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/button/Button';
import { register } from '../../../redux/authSlice';
import styles from './Register.module.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
    email: Yup.string().email('Enter a validd email address').required('Email cannot be empty'),
    password: Yup.string().min(8, "Must be at least 8 characters").required('Password cannot be empty'),
    username: Yup.string().required('Username cannot be empty'),
});



const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },

        onSubmit: values => {
            dispatch(register(values))
                .unwrap()
                .then(() => {
                    toast.success('Qeydiyyatdan kecdiniz ', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        navigate('/daxil-ol')
                    }, 3000);
                })
                .catch((err) => {
                    const {
                        password: parol,
                        email: mail,
                        username: useradi,
                    } = err.validationErrors;

                    console.log("dscdscdsc", err);

                    toast.error(parol, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    toast.error(mail, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    toast.error(useradi, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })

        },
        // validationSchema: validationSchema,
        // validateOnMount: true
    });

    return (
        <div className={styles.register}>
            <ToastContainer />
            <div className={styles.image_box}>
            </div>
            <div className={styles.form_box}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <h2 className={styles.title}>
                        Welcome Register!
                    </h2>
                    <div className={styles.d_flex}>
                        <div className={styles.form_group}>
                            <label htmlFor="email">Email </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className={styles.error}>{formik.errors.email}</div>
                            ) : null
                            }
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="email">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div className={styles.error}>{formik.errors.username}</div>
                            ) : null
                            }
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="email">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className={styles.error}>{formik.errors.password}</div>
                            ) : null
                            }
                        </div>
                    </div>
                    <div className={styles.register_btn}>
                        <Button width={"full"} className={styles.btn} bg="#00A551">
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register