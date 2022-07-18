import { Link  } from "react-router-dom" // useNavigate
//import { useSelector, useDispatch } from "react-redux"

export default function TopNavBar(){
    /*
    const dispatch = useDispatch()
    const {auth} = useSelector((state) => ({...state}))
    const navigate = useNavigate()

    function Logout(){
        dispatch({
            type:  "LOGOUT",
            payload: null
        })
        window.localStorage.removeItem("auth")
        navigate("/login")
    }
    */
    return(
        <nav className="nav bg-light d-flex justify-content-between">
            <Link className="nav-link" to="/">Home</Link>

            {/*}
            {auth !== null && (
                <Link className="nav-link pointer" to="/" onClick={() => Logout}>Logout</Link>
            )}

            {auth === null && (
                <>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/register">Register</Link>
                </>
            )}
            */}

            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>

        </nav>
    )
}