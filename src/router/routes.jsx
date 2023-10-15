import Register from "../pages/auth/register/Register"
import SignIn from "../pages/auth/signIn/SignIn"
import Home from "../pages/home/Home"
import MyAccount from "../pages/myAccount/MyAccount"
import Rating from "../pages/rating/Rating"
import Territories from "../pages/territories/Territories"
import Trees from "../pages/trees/Trees"

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/agaclar',
        element: <Trees />
    },
    {
        path: '/qeydiyyat',
        element: <Register />

    },
    {
        path: '/reiting',
        element: <Rating />

    },
    {
        path: '/eraziler',
        element: <Territories />
    },
    {
        path: '/daxil-ol',
        element: <SignIn />
    },
    {
        path: '/profile',
        element: <MyAccount />
    }

]

export default routes