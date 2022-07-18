import { useState } from "react";
import {RegisterAction} from "../actions/auth";
import { toast } from "react-toastify";
import RegisterForm from "../components/registerForm";

export default function Register(){

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function handleSubmit(e){
        e.preventDefault()
        //console.table({name,email,password})
        try{
            await RegisterAction({name,email,password})
            toast.success("Register Sucess. Please Login")
        } catch(error){
            console.log(`Erro: ${error}`)
            if(error.response.status === 400){
                toast.error(error.response.data)
            }
            //toast("Register Failed. Please try again")
        }
    }

    return (
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Register</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <RegisterForm
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}