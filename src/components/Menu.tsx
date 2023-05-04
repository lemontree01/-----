import React from 'react'
import "./menu.scss"


const Menu = () => {
  const highScore: number  = +(localStorage.getItem('high-score-egg-cather') ?? 0)
  return (
    <div className='menu'>
      <div>Меню</div>
    </div>
  )
}

export default Menu