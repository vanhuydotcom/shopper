import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router"

export default function PrivateRoute(prop) {
    let { login } = useSelector((store) => store.auth)
    if (!login) {

        return <Route>
            <Redirect path="/auth" />
        </Route>


    }
    return <Route {...prop} />
}