import { useState } from "react";
import { toast } from "react-toastify";
import { LoginAction } from "../actions/auth"
import LoginForm from "../components/LoginForm"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

export default function Login({history}){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            let res = await LoginAction({email,password})
            
            if(res.data){
                //save user and token to localStorage
                window.localStorage.setItem('auth', JSON.stringify(res.data))
                //save user and token to redux
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: res.data
                })
                navigate("/") //comeback to home
            }

        } catch(error){
            console.log(error)
            if(error.response.status === 400){
                toast.error(error.response.data)
            }
        }
    }

    return (
        <>
            <div className="container-fluid bg-secondary h1 p-5 text-center">
                Login
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <LoginForm
                            handleSubmit={handleSubmit}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                        />
                    </div>  
                </div>
            </div>
        </>
    );
}