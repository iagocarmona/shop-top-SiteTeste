import React, { useState, useCallback } from 'react'
import InputBackground from '../../components/Input'
import { useHistory } from 'react-router-dom'
import ButtonSubmit from '../../components/Buttons/ButtonEnviar'
import Logo from '../../assets/Logo.svg'
import Bag from '../../assets/Bag.svg'
import { auth } from '../../firebase'
import './style.css'

function Login() {
  const history = useHistory()
  const [isEmailActive, setIsEmailActive] = useState(true)
  const [isPasswordActive, setIsPasswordActive] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault()
      try {
        await auth
          .signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            console.log(userCredential)
            setIsError(false)
            if (userCredential.user) {
              history.push('/home')
            }
          })
      } catch (error) {
        if (error) {
          setIsError(true)
          console.error(error)
        }
      }
    },
    [email, password, history]
  )

  const handleShowPass = () => {
    let showPass = document.getElementById('showPass')
    if (showPass.checked) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }
  }

  return (
    <div className="background">
      <div className="leftSide">
        <div className="logoDiv">
          <div className="logoImg">
            <img className="logoPic" src={Logo} alt="Carregando..." />
          </div>
        </div>
        <div className="bagDiv">
          <div className="bagImg">
            <img className="bagPic" src={Bag} alt="Carregando..." />
          </div>
        </div>
      </div>

      <div className="rightSide">
        <div className="rightContainer">
          <div className="title">
            <h1 className="titleH1">
              Fidelize seus clientes de forma rápida e fácil
            </h1>
          </div>
          <div className="subtitle">
            <h4 className="sutitleH2">
              Bem vindo/a de volta! Por favor faça o login em sua conta
            </h4>
          </div>
          <div className="formContent">
            <form onSubmit={handleLogin}>
              <div className="inputField">
                {/* ================ Input Email ================ */}
                <InputBackground
                  divClassName={
                    isEmailActive ? 'inputBack active' : 'inputBack'
                  }
                  labelClassName={isError ? 'labelText error' : 'labelText'}
                  inputClassName={
                    isError ? 'backgroundInput error' : 'backgroundInput'
                  }
                  htmlFor="email"
                  label="Email Address"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onClick={() => {
                    setIsPasswordActive(false)
                    setIsEmailActive(true)
                  }}
                />

                {/* ================ input Password ================ */}
                <InputBackground
                  divClassName={
                    isPasswordActive ? 'inputBack active' : 'inputBack'
                  }
                  labelClassName={isError ? 'labelText error' : 'labelText'}
                  inputClassName={
                    isError ? 'backgroundInput error' : 'backgroundInput'
                  }
                  htmlFor="password"
                  label="Password"
                  type={isShow ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  onClick={() => {
                    setIsEmailActive(false)
                    setIsPasswordActive(true)
                  }}
                />
              </div>
              <div className="formOptions">
                {/*================ checkbox lembrar acesso ================ */}
                <div className="rememberContent">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="remember"
                    name="remember"
                  />
                  <label className="remember" htmlFor="remember">
                    Lembrar acesso
                  </label>
                </div>

                {/*================ checkbox ver senha ================*/}
                <div className="rememberContent">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="showPass"
                    name="showPass"
                    onChange={(element) => {
                      handleShowPass(element)
                    }}
                  />
                  <label className="remember" htmlFor="showPass">
                    Ver senha
                  </label>
                </div>

                {/*================ link esqueceu sua senha ================*/}
                <div className="forgotten">
                  <a className="fotgotText" href="/forgotPassword">
                    esqueceu sua senha?
                  </a>
                </div>
              </div>
              <ButtonSubmit className="button" name="Entrar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
