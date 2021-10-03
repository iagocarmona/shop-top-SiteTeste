import React, { useState, useCallback } from 'react'
import { useCampaign } from '../../context/Campaign'
import HomeModal from './home'
import Teste from './teste'

const NewCampaign = (props) => {
  const [campaignName, setCampaignName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [finalDate, setFinalDate] = useState('')
  const [giftCard, setGiftCard] = useState('')
  const [giftCardValue, setGiftCardValue] = useState('')
  const [textArea, setTextArea] = useState('')
  const { setCampaign } = useCampaign()

  const [currentModal, setCurrentModal] = useState(0)

  const handleCampaign = useCallback(
    (event) => {
      event.preventDefault()
      const data = {
        campaignName,
        startDate,
        finalDate,
        giftCard,
        giftCardValue,
        textArea,
      }
      try {
        console.log(data)
        setCampaign((prevState) => {
          return [...prevState, data]
        })
        props.closeModal()
      } catch (error) {
        console.error(error)
      }
    },
    [
      campaignName,
      startDate,
      finalDate,
      giftCard,
      giftCardValue,
      textArea,
      setCampaign,
      props,
    ]
  )

  const nextModal = () => {
    setCurrentModal((prevState) => prevState + 1)
  }

  const previousModal = () => {
    if (currentModal === 0) {
      return
    } else {
      setCurrentModal((prevState) => prevState - 1)
    }
  }

  const pagesModal = [
    <HomeModal
      nextModal={nextModal}
      state={{
        campaignName,
        setCampaignName,
        startDate,
        setStartDate,
        finalDate,
        setFinalDate,
        giftCard,
        setGiftCard,
        giftCardValue,
        setGiftCardValue,
        textArea,
        setTextArea,
        setCampaign,
      }}
      handleCampaign={handleCampaign}
    />,
    <Teste previousModal={previousModal} />,
  ]

  return <>{pagesModal[currentModal]}</>
}

export default NewCampaign
