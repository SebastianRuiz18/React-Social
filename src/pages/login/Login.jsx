import "./login.css"

export default function Login() {
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
                <div className="loginBox">
                    <input placeholder="E-mail" className="loginInput" />
                    <input placeholder="Constraseña" className="loginInput" />
                    <button className="loginButton">Iniciar Sesión</button>
                    <span className="loginForgot">Olvidé mi contraseña</span>
                    <button className="loginRegisterButton">Crear una Cuenta</button>
                </div>
            </div>
        </div>
    </div>
  )
}
