import React, { createContext, useState, useContext } from 'react'

const CampaignContext = createContext()

export default function CampaignProvider({ children }) {
  const [campaign, setCampaign] = useState([])

  return (
    <CampaignContext.Provider
      value={{
        campaign,
        setCampaign,
      }}
    >
      {children}
    </CampaignContext.Provider>
  )
}

export function useCampaign() {
  const context = useContext(CampaignContext)
  if (!context) throw new Error('useCount must be used within a CountProvider')
  const { campaign, setCampaign } = context
  return { campaign, setCampaign }
}
