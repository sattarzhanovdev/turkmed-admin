import React from 'react'
import c from './appointments.module.scss'
import { UseGetAppointments, UseGetDoctors } from '../../helpers'

const Appointments = () => {
  const { appointments } = UseGetAppointments()
  const { doctors } = UseGetDoctors()

  return (
    <div className={c.appointments}>
      <h2>Приёмы</h2>
      <div className={c.notifications}>
        {
          appointments ?
          appointments.map((item, i) => (
            <div className={c.notification} key={i}>
              <div className={c.left}>
                <div>
                  <p>{item.full_name.split(' ')[1]?.slice(0,1)}</p>
                </div>
              </div>
              <div className={c.right}>
                <p>{item.full_name}</p>
                <p>{item.time.slice(0, 10)} | {item.time.slice(11, 16)} | {doctors?.find(value => value.id === item.doctor).full_name}</p> 
              </div>
            </div>
          )) : 
          null
        }
      </div>
    </div>
  )
}

export default Appointments