import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Campaign from '../../components/Campaigns'
import ButtonIcon from '../../components/Buttons/ButtonIcon'
import ButtonNav from '../../components/Buttons/ButtonNav'
import LogoBlue from '../../assets/LogoBlue.svg'
import ModalEl from '../../components/Modal'
import NewCampaign from '../../components/NewCampaign'
import NewClient from '../../components/NewClient'
import './style.css'

const Home = () => {
  const [newCampaignModal, setNewCampaignModal] = useState(false)
  const [newClientModal, setNewClientModal] = useState(false)
  // const [myClientsModal, setMyClientsModal] = useState(false)
  const openNewCampaignModal = () => setNewCampaignModal(!newCampaignModal)
  const openNewClientModal = () => setNewClientModal(!newClientModal)
  // const openMyClientsModal = () => setMyClientsModal(!myClientsModal)

  return (
    <div className="App">
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a href="/" className="navbar-brand">
            <img className="logo" src={LogoBlue} alt="Carregando..." />
          </a>
          <div className="buttonMenu">
            {/* ---- NAVBAR BUTTON NOTIFICATIONS ---- */}

            <ButtonNav icon="bell" />

            {/* ---- NAVBAR BUTTON SETTINGS ---- */}

            <ButtonNav icon="cog" />

            {/* ---- NAVBAR BUTTON ID PERSON ---- */}
            <ButtonNav icon="address-card" />
          </div>
        </nav>
      </div>
      {/* container */}

      <div className="masterContainer">
        <div className="cotainer-fluid marginContainer">
          <div className="searchContainer">
            <div className="searchInput">
              <div className="inputDiv">
                <input
                  className="textInput"
                  type="text"
                  placeholder="Digite o CPF cadastrado ou nome"
                />
              </div>
            </div>
            <div className="searchButton">
              <button type="button" className="search">
                <div className="icon">
                  <FontAwesomeIcon icon="search" />
                </div>
                <div className="submitButton">Busca</div>
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid buttonsContainer">
          <div className="backgroundContainer">
            <div className="buttons">
              {/* ---- NEW COMPAGNE BUTTON ---- */}
              <ModalEl
                open={newCampaignModal}
                toggle={openNewCampaignModal}
                modalHeader="Nova Campanha"
                icon="folder-plus"
                buttonLabel="Novo Campanha"
              >
                <NewCampaign closeModal={openNewCampaignModal} />
              </ModalEl>

              {/* ---- NEW CLIENT BUTTON ---- */}
              <ModalEl
                open={newClientModal}
                toggle={openNewClientModal}
                modalHeader="Novo Cliente"
                icon="user-plus"
                buttonLabel="Novo Cliente"
              >
                <NewClient />
              </ModalEl>

              {/* ---- MY CLIENTS BUTTON ---- */}

              <ButtonIcon icon="users" name="Meus Clientes" />
            </div>
          </div>
        </div>
        <div className="container-fluid campaignContainer">
          <div className="backgroundCampaign">
            <Campaign />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
