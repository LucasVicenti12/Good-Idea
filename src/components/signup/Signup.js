import axios from "axios";
import React, { useState } from "react";
import * as yup from "yup"
import {ErroMenssage, Formik, Form, Field} from "formik"
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"


const Signup = () => {

    const handleRegister = (values) => {
        axios.post("http://localhost:4001/register", {
          email: values.email,
          password: values.password,
        }).then((response) => {
          alert(response.data.msg);
          console.log(response);
        });
      };

    return(
        <div>
            <Formik className="div-main-signup"
                initialValues = {{}}
                onSubmit={handleRegister}>
                <Form className="div-login-signup">
                    <h1>Goodness - Sign up</h1>
                    <Field placeholder="Type your email:" name="email"/>
                    <Field placeholder="Type a password:" name="password"/>
                    <Field placeholder="Confirm your password:" name="confirmation"/>
                    <button type="submit" className="btn-login">Sign Up</button>
                </Form>
            </Formik>  
        </div>
    )
}
export default Signup;