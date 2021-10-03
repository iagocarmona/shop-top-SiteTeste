import React from 'react'
import ReactDOM from 'react-dom'
import MainRoutes from './routes'
import { SnackbarProvider } from 'notistack'
import CampaignProvider from './context/Campaign'
import './global.css'
import './components/FontawesomeIcons'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={6}>
      <CampaignProvider>
        <MainRoutes />
      </CampaignProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
