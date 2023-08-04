import React from 'react'
import c from './sidebar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { NAVLIST } from '../../utils'

const Sidebar = () => {
  const location = useLocation().pathname

  return (
    <div className={c.sidebar}>
      <div className={c.logo}>
        <Link to={'/'}>
          <img 
            src="/images/logo.svg" 
            alt="logo"
          />
        </Link>
      </div>
      <ul className={c.list}>
        {
          NAVLIST.map(item => (
            <li key={item.id} className={location === item.path ? c.active : null}>
              <Link to={item.path}>
                <img 
                  src={item.icon} 
                  alt={item.path}
                />
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar