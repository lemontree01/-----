import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Position, Wolf as WolfModel } from "./../models/Wolf";
import Wolf1 from "../assets/wolf-0-0.png";
import Wolf2 from "../assets/wolf-0-1.png";
import Wolf3 from "../assets/wolf-1-0.png";
import Wolf4 from "../assets/wolf-1-1.png";
import "./Wolf.scss";

interface WolfProps {
  wolf: WolfModel;
  wolfPosition: Position;
  setPlayerPosition: Dispatch<SetStateAction<Position>>
}

const Wolf: React.FC<WolfProps> = ({wolf, wolfPosition, setPlayerPosition }) => {
  const [position, setPosition] = useState(wolfPosition) 
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
    return () => {
      document.removeEventListener('keydown', detectKeyDown)
    }
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
    setPlayerPosition(wolf.position)
  }

  return (
    <div className="wolf">
      {(position === "UPPER_LEFT" ||
        position === "UPPER_RIGHT") && (
          <>
            <img src={Wolf1} className={`${position === 'UPPER_RIGHT' && 'hide'}`}/>
            <img src={Wolf2} className={`${position === 'UPPER_LEFT' && 'hide'}`}/>
          </>
        )}
      {(position === "BOTTOM_LEFT" ||
        position === "BOTTOM_RIGHT") && (
          <>
            <img className={`wolf-three ${position === 'BOTTOM_RIGHT' && 'hide'}`} src={Wolf3} />
            <img src={Wolf4} className={`${position === 'BOTTOM_LEFT' && 'hide'}`}/>
          </>
        )}
    </div>
  );
};

export default Wolf;
