import React from 'react'
import Background from "./../assets/game-bg.png"
import "./screen.scss"

const Screen = () => {
  return (
    <div className='screen'>
      <img src={Background} alt="" />
    </div>
  )
}

export default Screen