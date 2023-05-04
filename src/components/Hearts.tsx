import React from 'react'
import Lost1 from "../assets/lost-1.png"
import Lost2 from "../assets/lost-2.png"
import Lost3 from "../assets/lost-3.png"
import "./hearts.scss"
interface HeartsProps { 
  hearts: number
}

const Hearts:React.FC<HeartsProps> = ({hearts}) => {
  return (
    <div className='hearts'>
      <img className={`lost-1 ${hearts === 0 && 'hide'}`} src={Lost1}/>
      <img className={`lost-2 ${hearts < 2 && 'hide'}`} src={Lost1}/>
      <img className={`lost-3 ${hearts < 3 && 'hide'}`} src={Lost1}/>
    </div>
  )
}

export default Hearts