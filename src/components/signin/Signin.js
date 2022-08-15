import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup"
import {ErroMenssage, Formik, Form, Field} from "formik"
import { AuthContext } from "../../context/auth";
import "./Signin.css"

const Signin = () => {

    const handleLogin = (values) => {
        axios.post("http://localhost:4001", {
            email: values.email,
            password: values.password
        }).then((response) => {
            alert(response.data.msg)
        })
    }

    return(
        <div>
            <Formik
            onSubmit={handleLogin}
            initialValues={{}}
            
            >
                <Form className="div-login">
                <h1>Goodness - Sign in</h1>
                {/* <p>{String(authenticated)}</p> */}
                <Field name="email" placeholder="Email:"/>
                <Field name="password" placeholder="Password:"/>
                <button type="submit" className="btn-login">Sign in</button>
                {/* <p className="create-ancount">If you don't have a login, create an <Link to="/signup" className="link">ancount</Link></p> */}
            </Form>
            </Formik>
        </div>
    )
}

export default Signin;