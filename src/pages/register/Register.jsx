import { useRef } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Las contraseñas deben ser iguales.")
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {

                await axios.post("/auth/register", user);
                navigate('/login');
            } catch (err) {
                console.log(err);
            }
            
        }

    }


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
                    <input placeholder="Usuario (Nombre)" required ref={username} className="loginInput" />
                    <input placeholder="E-mail" required ref={email} className="loginInput" type="email"/>
                    <input placeholder="Constraseña" required ref={password} className="loginInput" type="password" minLength="6"/>
                    <input placeholder="Confirmar Constraseña" required ref={passwordAgain} className="loginInput" type="password"/>
                    <button className="loginButton" type="submit">Registrar</button>
                    <button className="loginRegisterButton">Ingresar a Cuenta</button>
                </form>
            </div>
        </div>
    </div>
  )
}
