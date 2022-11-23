import { useRef } from "react";
import "./login.css"
import {loginCall} from "../../apiCalls"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);


    const handleClick = (e) => {
        e.preventDefault()
        loginCall({email:email.current.value, password:password.current.value}, dispatch);
    };

    console.log(user)

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Socialgo</h3>
                <span className="loginDesc">
                    Conecta con tus amigos y compañeros del <a className="anchorITT" target="_blank" href="https://www.tijuana.tecnm.mx/"> Instituto Tecnológico de Tijuana </a>  en Socialgo.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="E-mail" type="email" required className="loginInput" ref={email} />
                    <input placeholder="Constraseña" type="password" required minLength="6" className="loginInput" ref={password} />
                    <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? (<CircularProgress color="inherit" size="30px"/>) : ("Iniciar Sesión")}</button>
                    <span className="loginForgot">Olvidé mi contraseña</span>
                    <button className="loginRegisterButton"> {isFetching ? (<CircularProgress color="inherit" size="30px"/>) : ("Crear una Cuenta")}</button>
                </form>
            </div>
        </div>
    </div>
  )
}
