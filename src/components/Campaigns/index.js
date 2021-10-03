import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCampaign } from '../../context/Campaign'
import './style.css'

function Campaign() {
  const { campaign } = useCampaign()
  return campaign.map((item) => (
    <div className="boxCampaign">
      <nav className="navbarCampaign">
        <span id="CampaignName">{item.campaignName}</span>
      </nav>
      <div className="container-boxes">
        <div className="validade">
          <FontAwesomeIcon icon="calendar-week" id="calendar" />
          <div className="boxValid">
            <div className="textValid">
              <span id="textValidate">VALIDADE</span>
            </div>
            <div className="textDate">
              <span id="textDate">
                {item.finalDate ? item.finalDate : 'Indeterminado'}
              </span>
            </div>
          </div>
        </div>
        <div className="participantes">
          <FontAwesomeIcon icon="user-friends" id="people" />
          <div className="boxParticipants">
            <div className="textParts">
              <span id="textParticipants">PARTICIPANTES</span>
            </div>
            <div className="textNum">
              <span id="textNumber">{item.giftCard}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="textLorem">
        <span className="textLoremIpsum">{item.textArea}</span>
      </div>
    </div>
  ))
}

export default Campaign
