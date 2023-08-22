import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainRoutes from './routes'
import { Components } from './components'
import './App.scss'
import axios from 'axios'

axios.defaults.baseURL = 'https://turkmed890.pythonanywhere.com'

function App() {
  return (
    <div className='main__block'>
      <MainRoutes />
    </div>
  )
}

export default App