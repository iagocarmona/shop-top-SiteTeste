import React, { useState, useCallback } from 'react'
import ButtonSubmit from '../Buttons/ButtonEnviar'
import InputBackground from '../Input'
import './style.css'

const Teste = (props) => {
  const [clientName, setClientName] = useState('')
  const [clientCpf, setClientCpf] = useState('')
  const [clientWhats, setClientWhats] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientCep, setClientCep] = useState('')

  const handleActiveInput = (element) => {
    let allInputs = document.querySelectorAll('.inputBack')
    allInputs.forEach((item) => {
      if (item === element.target.parentElement) {
        item.classList.add('active')
      } else {
        item.classList = 'inputBack InputMarginTop'
      }
    })
  }

  const handleClient = useCallback(
    (event) => {
      event.preventDefault()
      const data = {
        clientName,
        clientCpf,
        clientWhats,
        clientPhone,
        clientEmail,
        clientCep,
      }
      try {
        console.log(data)
      } catch (error) {
        if (error) {
          console.error(error)
        }
      }
    },
    [clientName, clientCpf, clientWhats, clientPhone, clientEmail, clientCep]
  )

  return (
    <>
      <form onSubmit={handleClient}>
        <div className="clientInputContainer">
          <InputBackground
            divClassName="inputBack InputMarginTop"
            labelClassName="labelText"
            inputClassName="backgroundInput"
            htmlFor="clientName"
            label="Nome:"
            type="text"
            id="clientName"
            name="clientName"
            value={clientName}
            onChange={(event) => setClientName(event.target.value)}
            onClick={(element) => {
              handleActiveInput(element)
            }}
          />
          <InputBackground
            divClassName="inputBack InputMarginTop"
            labelClassName="labelText"
            inputClassName="backgroundInput"
            htmlFor="clientCpf"
            label="CPF:"
            type="text"
            id="clientCpf"
            name="clientCpf"
            value={clientCpf}
            onChange={(event) => setClientCpf(event.target.value)}
            onClick={(element) => {
              handleActiveInput(element)
            }}
          />
          <InputBackground
            divClassName="inputBack InputMarginTop"
            labelClassName="labelText"
            inputClassName="backgroundInput"
            htmlFor="clientWhats"
            label="WhatsApp: "
            type="text"
            id="clientWhats"
            name="clientWhats"
            value={clientWhats}
            onChange={(event) => setClientWhats(event.target.value)}
            onClick={(element) => {
              handleActiveInput(element)
            }}
          />
          <InputBackground
            divClassName="inputBack InputMarginTop"
            labelClassName="labelText"
            inputClassName="backgroundInput"
            htmlFor="clientPhone"
            label="Telefone:"
            type="text"
            id="clientPhone"
            name="clientPhone"
            value={clientPhone}
            onChange={(event) => setClientPhone(event.target.value)}
            onClick={(element) => {
              handleActiveInput(element)
            }}
          />
          <InputBackground
            divClassName="inputBack InputMarginTop"
            labelClassName="labelText"
            inputClassName="backgroundInput"
            htmlFor="clientEmail"
            label="E-mail:"
            type="email"
            id="clientEmail"
            name="clientEmail"
            value={clientEmail}
            onChange={(event) => setClientEmail(event.target.value)}
            onClick={(element) => {
              handleActiveInput(element)
            }}
          />
          <InputBackground
            divClassName="inputBack InputMarginTop"
            labelClassName="labelText"
            inputClassName="backgroundInput"
            htmlFor="clientCep"
            label="CEP:"
            type="text"
            id="clientCep"
            name="clientCep"
            value={clientCep}
            onChange={(event) => setClientCep(event.target.value)}
            onClick={(element) => {
              handleActiveInput(element)
            }}
          />
        </div>
        <div className="createClient">
          <ButtonSubmit
            classDivName="ButtonContent "
            className="button buttonEnviar createCampaign"
            name="voltar"
            onClick={props.previousModal}
          />
          <ButtonSubmit
            classDivName="ButtonContent "
            className="button buttonEnviar createCampaign"
            name="Salvar dados"
          />
        </div>
      </form>
    </>
  )
}

export default Teste
