import SignIn from "../pages/auth/signIn/SignIn"
import Home from "../pages/home/Home"
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
        path: '/reyting',

    },
    {
        path: '/eraziler',
        element: <Territories />
    },
    {
        path: '/daxil-ol',
        element: <SignIn />
    }

]

export default routes