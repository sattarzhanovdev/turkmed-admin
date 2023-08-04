import React from 'react'
import c from './main.module.scss'
import { Components } from '../../components'

const Main = () => {
  return (
    <div className={c.main}>
      <header>
        <Components.Header />
      </header>
      <main>
        <div className={c.statistic}>
          <Components.Statistic />
          <Components.Appointments />
        </div>
      </main>
    </div>
  )
}

export default Main