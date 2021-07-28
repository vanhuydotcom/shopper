import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
export function RouterConfig(routers, parentPath = '') {
    return <Switch>
        {
            routers.map((e, index) => {
                let { exact, path, component: Component, routers: childRouters, auth } = e
                if (!path) path = ''
                path = parentPath + '/' + path
                path = path.replace(/\/+/g, '/')
                let child = null
                if (childRouters) {
                    child = RouterConfig(childRouters, path)
                }
                if (auth) {
                    return <PrivateRoute exact={exact} path={path} component={(prop) => <Component {...prop}>{child}</Component>} />
                }

                return <Route key={index} exact={exact} path={path} component={(prop) => <Component {...prop}>{child}</Component>} />
            })
        }
    </Switch>
}