import React, { useEffect } from 'react'
import Letter from '../../assets/Letter.svg'
import { useHistory } from 'react-router-dom'
import './style.css'

function SendEmail() {
  const history = useHistory()
  useEffect(() => {
    setTimeout(() => {
      history.push('/')
    }, 3000)
  }, [history])
  return (
    <div className="container">
      <div className="backgroundPass">
        <div className="title title3">
          <div className="emoji">
            <img className="letterEmoji" src={Letter} alt="Carregando..."></img>
          </div>
          <div className="text">
            <h1 className="nameTitle">
              Enviamos um email para redefinir a senha
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SendEmail
