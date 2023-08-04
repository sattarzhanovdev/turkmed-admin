import React from 'react'
import c from './header.module.scss'

const Header = () => {
  return (
    <div className={c.header}>
      <div className={c.search}>
        <input 
          type="text"
          placeholder='Поиск'
        />
        <img 
          src='/icons/search.svg'
          alt='search'
        />
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