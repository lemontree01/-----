import React, { useEffect, useState } from "react";
import { Wolf as WolfModel } from "./../models/Wolf";
import Wolf1 from "../assets/wolf-0-0.png";
import Wolf2 from "../assets/wolf-0-1.png";
import Wolf3 from "../assets/wolf-1-0.png";
import Wolf4 from "../assets/wolf-1-1.png";
import "./Wolf.scss";

interface WolfProps {
  wolf: WolfModel;
}

const Wolf: React.FC<WolfProps> = ({ wolf }) => {
  const [position, setPosition] = useState(wolf.position) 
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, []) 

  const detectKeyDown = (e: any) => {
    if(e.key === "ArrowDown") {
      wolf.moveDown()
    }

    if(e.key === "ArrowUp") {
      wolf.moveUp()
    }

    if(e.key === "ArrowLeft") {
      wolf.moveLeft()
    }

    if(e.key === "ArrowRight") {
      wolf.moveRight()
    }

    setPosition(wolf.position)
  }
  return (
    <div className="wolf">
      {(wolf.position === "UPPER_LEFT" ||
        wolf.position === "UPPER_RIGHT") && (
          <>
            <img src={Wolf1} className={`${wolf.position === 'UPPER_RIGHT' && 'hide'}`}/>
            <img src={Wolf2} className={`${wolf.position === 'UPPER_LEFT' && 'hide'}`}/>
          </>
        )}
      {(wolf.position === "BOTTOM_LEFT" ||
        wolf.position === "BOTTOM_RIGHT") && (
          <>
            <img className={`wolf-three ${wolf.position === 'BOTTOM_RIGHT' && 'hide'}`} src={Wolf3} />
            <img src={Wolf4} className={`${wolf.position === 'BOTTOM_LEFT' && 'hide'}`}/>
          </>
        )}
    </div>
  );
};

export default Wolf;
