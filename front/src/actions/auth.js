import axios from "axios";

const RegisterAction = async (user) => 
    await axios.post(`${process.env.REACT_APP_API}/register`, user)


const LoginAction = async (user)=> 
    await axios.post(`${process.env.REACT_APP_API}/login`, user)

export {RegisterAction, LoginAction}