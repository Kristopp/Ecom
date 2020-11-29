import React, { useState } from "react";
import { auth } from "../firebase";
import Styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const LoginContainer = Styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`;
const FormContainer = Styled.div`
width: 300px;
height: fit-content;
display: flex;
flex-direction: column;
border-radius: 5px;
border: 1px solid lightgray;
padding: 20px;
`;
const ButtonContainer = Styled.div``;
const LoginLogo = Styled.img`
margin-top: 20px;
margin-bottom: 20px;
width: 100px;
margin-right: auto;
margin-left: auto;
`;
const LoginForm = Styled.form``;
const LoginInput = Styled.input`
height: 30px;
margin-bottom: 10px;
background-color: white;
width: 98%;
`;
const ButtonLogin = Styled.button`
border-radius: 2px;
width: 100%;
height: 30px;
border: 1px solid black;
margin-bottom: 10px;
`;

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInButton = (e) => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => { 
        history.push('/')
    })
    .catch(error => alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //If user creation was succeseful rederict home
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <Link to="/home">
        <LoginLogo></LoginLogo>
      </Link>
      <FormContainer>
        <h1 style={{ fontWeight: "500", marginBottom: "20px" }}>Sign-in</h1>
        <LoginForm>
          <h5 style={{ marginBottom: "5px" }}>E-mail</h5>
          <LoginInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></LoginInput>
          <h5 style={{ marginBottom: "5px" }}>password</h5>
          <LoginInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></LoginInput>
          <ButtonContainer>
            <ButtonLogin type="submit" onClick={signInButton}>
              Sign In
            </ButtonLogin>
            <ButtonLogin onClick={register}>Create Acount</ButtonLogin>
          </ButtonContainer>
        </LoginForm>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;
