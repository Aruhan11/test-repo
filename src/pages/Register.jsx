import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        const res = await createUserWithEmailAndPassword(auth, email, password)
    }
    
    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   // ...
    // })
    //     .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });    

    

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;