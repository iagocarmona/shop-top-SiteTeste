import React, { useState } from 'react'
import ButtonSubmit from '../Buttons/ButtonEnviar'
import InputBackground from '../Input'

import './style.css'

const HomeModal = (props) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleActiveInput = (element) => {
    let allInputs = document.querySelectorAll('.inputBack')
    allInputs.forEach((item) => {
      if (item === element.target.parentElement) {
        item.classList.add('active')
      } else if (item === allInputs[allInputs.length - 1]) {
        item.classList = 'inputBack'
      } else {
        item.classList = 'inputBack InputMarginTop'
      }
    })
  }

  return (
    <>
      <form onSubmit={props.handleCampaign}>
        <InputBackground
          divClassName="inputBack InputMarginTop"
          labelClassName="labelText"
          inputClassName="backgroundInput"
          htmlFor="campaignName"
          label="Nome da sua campanha"
          type="text"
          id="capaign"
          name="campaignName"
          value={props.state.campaignName}
          onChange={(event) => props.state.setCampaignName(event.target.value)}
          onClick={(element) => {
            handleActiveInput(element)
          }}
        />
        <div className="cotainerInput">
          <InputBackground
            divClassName="inputBack InputMarginTop"
            labelClassName="labelText"
            inputClassName="backgroundInput"
            htmlFor="startDate"
            label="Data inicial"
            type="date"
            id="startDate"
            name="startDate"
            value={props.state.startDate}
            onChange={(event) => props.state.setStartDate(event.target.value)}
            onClick={(element) => {
              handleActiveInput(element)
            }}
          />
          <InputBackground
            divClassName="inputBack InputMarginTop"
            labelClassName="labelText"
            inputClassName="backgroundInput"
            htmlFor="finalDate"
            label="Data final"
            type="date"
            id="finalDate"
            name="finalDate"
            value={props.state.finalDate}
            onChange={(event) => props.state.setFinalDate(event.target.value)}
            onClick={(element) => {
              handleActiveInput(element)
            }}
            disabled={isChecked ? true : false}
          />
          <InputBackground
            divClassName="inputBack InputMarginTop"
            labelClassName="labelText"
            inputClassName="backgroundInput"
            htmlFor="giftCard"
            label="Quantidade de cupons"
            type="number"
            id="giftCard"
            name="giftCard"
            value={props.state.giftCard}
            onChange={(event) => props.state.setGiftCard(event.target.value)}
            onClick={(element) => {
              handleActiveInput(element)
            }}
          />
        </div>
        <div className="checkboxContainer">
          <input
            className="checkbox checkboxLabel"
            type="checkbox"
            id="indefinitely"
            name="indefinitely"
            value={isChecked}
            onChange={(event) => {
              if (event.target.checked === true) {
                props.state.setFinalDate('')
              }
              setIsChecked(event.target.checked)
            }}
          />
          <label className="remember checkboxLabel" htmlFor="indefinitely">
            Tempo indeterminado
          </label>
        </div>
        <div className="textArea">
          <div className="textAreaBack backgroundTextArea">
            <label className="labelText" htmlFor="textArea">
              Regras da promoção:
            </label>
            <br />
            <textarea
              autoComplete="off"
              className="textAreaModal"
              type="text"
              placeholder=""
              id="textArea"
              name="textArea"
              value={props.state.textArea}
              onChange={(event) => props.state.setTextArea(event.target.value)}
            />
          </div>
          <div className="giftContainer">
            <InputBackground
              divClassName="inputBack"
              labelClassName="labelText"
              inputClassName="backgroundInput"
              htmlFor="giftCardValue"
              label="Valor para ganhar cupom:"
              type="number"
              id="giftCardValue"
              name="giftCardValue"
              value={props.state.giftCardValue}
              onChange={(event) =>
                props.state.setGiftCardValue(event.target.value)
              }
              onClick={(element) => {
                handleActiveInput(element)
              }}
            />
            <div className="checkboxContainer giftCheckBox">
              <input
                className="checkbox checkboxLabel checkBoxGift"
                type="checkbox"
                id="gift"
                name="gift"
              />
              <label
                className="remember checkboxLabel labelGiftBox"
                htmlFor="gift"
              >
                Cupom por compra
              </label>
            </div>
            <ButtonSubmit
              classDivName="ButtonContent "
              className="button buttonEnviar createCampaign"
              name="Criar campanha"
              onClick={props.nextModal}
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default HomeModal
