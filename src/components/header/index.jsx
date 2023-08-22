import React from 'react'
import c from './header.module.scss'
import { UseGetAppointments, UseGetDoctors } from '../../helpers'

const Header = () => {
  const [search, setSearch] = React.useState('')
  const {appointments} = UseGetAppointments()
  const {doctors} = UseGetDoctors()

  const searchResult = appointments?.filter(item => item.full_name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className={c.header}>
      <div className={c.search}>
        <div className={c.into}>
          <input 
            type="text"
            placeholder='Поиск пациента'
            onChange={e => setSearch(e.target.value)}
          />
          <img 
            src='/icons/search.svg'
            alt='search'
          />
        </div>
        {
          search.length !== 0 ?
          <div className={c.result}>
            {
              searchResult?.length !== 0?
              searchResult?.map((item, i) => (
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
              <p>
                Ничего не найдено!
              </p>
            }
          </div> :
          null
        }
      </div>
      <div className={c.profile}>
        <img 
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="user"
        />
        <p>Админ</p>
      </div>
    </div>
  )
}

export default Header