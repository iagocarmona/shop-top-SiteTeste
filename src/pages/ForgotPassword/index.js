import React, { useState, useCallback } from 'react'
import InputBackground from '../../components/Input'
import ButtonSubmit from '../../components/Buttons/ButtonEnviar'
import { useHistory } from 'react-router-dom'
import lock from '../../assets/lock.svg'
import { auth } from '../../firebase'
import './style.css'
import { useSnackbar } from 'notistack'

function ForgotPassword() {
  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()
  const [isEmailActive, setIsEmailActive] = useState(true)
  const [email, setEmail] = useState('')

  const handleForgotPassword = useCallback(
    async (event) => {
      event.preventDefault()
      try {
        await auth.sendPasswordResetEmail(email).then(() => {
          enqueueSnackbar(
            'Email has been sent to you, Please check and verify.',
            { variant: 'success' }
          )
          history.push('/sendEmail')
        })
      } catch (error) {
        if (error) {
          console.error(error)
        }
      }
    },
    [email, enqueueSnackbar, history]
  )

  return (
    <div className="container">
      <div className="backgroundPass">
        <div className="title title2">
          <div className="text">
            <h1 className="nameTitle">Redefinir senha</h1>
          </div>
          <div className="emoji">
            <img className="lockEmoji" src={lock} alt="Carregando..."></img>
          </div>
        </div>
        <div className="subtitle subtitleH4">
          <h4 className="nameSubtitle">
            Digite seu email para redefinir a senha
          </h4>
        </div>
        <form onSubmit={handleForgotPassword}>
          <div className="InputEmail">
            <InputBackground
              divClassName={isEmailActive ? 'inputBack active' : 'inputBack'}
              labelClassName="labelText"
              inputClassName="backgroundInput"
              htmlFor="email"
              label="Email cadastrado"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onClick={() => {
                setIsEmailActive(true)
              }}
            />
          </div>
          <div className="buttonField">
            <ButtonSubmit
              classDivName="ButtonContent"
              className="button buttonEnviar"
              name="Enviar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
