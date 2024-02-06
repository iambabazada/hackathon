import { useRoutes } from 'react-router-dom'
import routeData from './routes'

const Router = () => {
    const routes = useRoutes(routeData)
    return routes
}

export default Router
