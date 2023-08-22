import React from 'react'
import c from './statisctic.module.scss'
import { UseGetAppointments } from '../../helpers'

const Statistic = () => {
  const { appointments } = UseGetAppointments()

  return (
    <div className={c.statistic}>
      <h1>Здравствуйте</h1>
      <div className={c.block}>
        <div className={c.left}>
          <h2>Статистика на сегодня</h2>
          <div className={c.new__patient}>
            <h3>Пациентов</h3>
            <div className={c.down}>
              <h1>{appointments?.length}</h1> 
              <div>
                <img 
                  src="/icons/up.svg" 
                  alt="up"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={c.right}>
          <img src="/images/doctors.svg" alt="doctor" />
        </div>
      </div>
    </div>
  )
}

export default Statistic