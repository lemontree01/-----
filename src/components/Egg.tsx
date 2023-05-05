import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Egg as EggModel } from "../models/Egg";
import "./egg.scss";
import Egg1 from "../assets/egg1.png";
import Egg2 from "../assets/egg2.png";
import Egg3 from "../assets/egg3.png";
import Egg4 from "../assets/egg4.png";
import Egg5 from "../assets/egg5.png";
import Egg6 from "../assets/egg6.png";
import Egg7 from "../assets/egg7.png";
import Egg8 from "../assets/egg8.png";
import Egg9 from "../assets/egg9.png";
import Egg10 from "../assets/egg10.svg";
import Egg11 from "../assets/egg11.svg";
import Egg12 from "../assets/egg12.svg";
import Egg13 from "../assets/egg13.svg";
import Egg14 from "../assets/egg14.svg";
import Egg15 from "../assets/egg15.svg";
import Egg16 from "../assets/egg16.svg";
import Egg17 from "../assets/egg17.svg";
import Egg18 from "../assets/egg18.svg";
import Egg19 from "../assets/egg19.svg";
import Egg20 from "../assets/egg20.svg";
import { Position } from "../models/Wolf";

interface EggProps {
  egg: EggModel;
  playerPosition: Position;
}

const Egg: React.FC<EggProps> = ({ egg, playerPosition}) => {
  const [pos, setPos] = useState(egg.dropPosition);
  useEffect(() => {
    const id = setInterval(() => {
      setPos(egg.dropPosition)
    }, 500)
    return () => {
      clearInterval(id)
    }
  }, [])
  return (
    <div className="egg">
      {egg.basketPosition === "UPPER_LEFT" && (
        <div className="ur">
          <img
            className={`ur-1 ${egg.dropPosition !== 1 && "hide"}`}
            src={Egg1}
          />
          <img className={`ur-2 ${egg.dropPosition !== 2 && "hide"}`} src={Egg2} />
          <img className={`ur-3 ${egg.dropPosition !== 3 && "hide"}`} src={Egg3} />
          <img className={`ur-4 ${egg.dropPosition !== 4 && "hide"}`} src={Egg4} />
          <img className={`ur-5 ${egg.dropPosition !== 5 && "hide"}`} src={Egg5} />
        </div>
      )}
      {egg.basketPosition === "BOTTOM_LEFT" && (
        <div className="br">
          <img
            className={`ur-6 ${egg.dropPosition !== 1 && "hide"}`}
            src={Egg11}
          />
          <img
            className={`ur-7 ${egg.dropPosition !== 2 && "hide"}`}
            src={Egg12}
          />
          <img
            className={`ur-8 ${egg.dropPosition !== 3 && "hide"}`}
            src={Egg13}
          />
          <img
            className={`ur-9 ${egg.dropPosition !== 4 && "hide"}`}
            src={Egg14}
          />
          <img
            className={`ur-10 ${egg.dropPosition !== 5 && "hide"}`}
            src={Egg15}
          />
        </div>
      )}
      {egg.basketPosition === "UPPER_RIGHT" && (
        <div className="br">
          <img
            className={`ur-11 ${egg.dropPosition !== 1 && "hide"}`}
            src={Egg6}
          />
          <img
            className={`ur-12 ${egg.dropPosition !== 2 && "hide"}`}
            src={Egg7}
          />
          <img
            className={`ur-13 ${egg.dropPosition !== 3 && "hide"}`}
            src={Egg8}
          />
          <img
            className={`ur-14 ${egg.dropPosition !== 4 && "hide"}`}
            src={Egg9}
          />
          <img
            className={`ur-15 ${egg.dropPosition !== 5 && "hide"}`}
            src={Egg10}
          />
        </div>
      )}
      {egg.basketPosition === "BOTTOM_RIGHT" && (
        <div className="br">
          <img
            className={`ur-16 ${egg.dropPosition !== 1 && "hide"}`}
            src={Egg16}
          />
          <img
            className={`ur-17 ${egg.dropPosition !== 2 && "hide"}`}
            src={Egg17}
          />
          <img
            className={`ur-18 ${egg.dropPosition !== 3 && "hide"}`}
            src={Egg18}
          />
          <img
            className={`ur-19 ${egg.dropPosition !== 4 && "hide"}`}
            src={Egg19}
          />
          <img
            className={`ur-20 ${egg.dropPosition !== 5 && "hide"}`}
            src={Egg20}
          />
        </div>
      )}
    </div>
  );
};

export default Egg;
