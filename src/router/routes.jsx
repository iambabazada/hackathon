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
        path: '/eraziler',
        element: <Territories />
    }

]

export default routes