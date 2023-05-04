import React from 'react'
import "./score.css"

interface ScoreProps {
  score: number
}

const Score:React.FC<ScoreProps> = ({score}) => {
  return (
    <div className='score'>
      <span>{score}</span>
    </div>
  )
}

export default Score