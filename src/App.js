import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainRoutes from './routes'
import { Components } from './components'
import './App.scss'

function App() {
  return (
    <div className='main__block'>
      <Components.Sidebar />
      <MainRoutes />
    </div>
  )
}

export default App