import React, { useEffect, useState } from "react";
import { Position, Wolf as WolfModel } from "./models/Wolf";
import { Egg as EggModel } from "./models/Egg";
import Wolf from "./components/Wolf";
import Egg from "./components/Egg";
import Screen from "./components/Screen";
import "./styles.scss";
import Hearts from "./components/Hearts";
import { GameMode, Player } from "./models/Player";
import Score from "./components/Score";
import Menu from "./components/Menu";
const eggs: EggModel[] = [
  new EggModel("UPPER_RIGHT", 0),
  new EggModel("BOTTOM_LEFT", 1),
];
const App = () => {
  const wolf = new WolfModel();
  const player = new Player();

  const [mode, setMode] = useState<GameMode>("notStarted");
  const [playerPosition, setPlayerPosition] = useState(wolf.position);
  const [value, setValue] = useState(500);
  const [displayedEggs, setDisplayedEggs] = useState<EggModel[]>([]);
  const [score, setScore] = useState(player.score);
  const [hp, setHp] = useState(3);

  const eggTick = (displayedEggs: EggModel[]) => {
    const newEggs = [
      ...[...displayedEggs].map((e) => {
        const newEgg = new EggModel(e.basketPosition, e.id);
        if (e.dropPosition === 5) {
          if (e.basketPosition === playerPosition) {
            setScore((p) => p + 1);
          } else {
            setHp((p) => p - 1);
          }
          newEgg.isDropped = true;
        }
        //@ts-ignore
        newEgg.dropPosition = e.dropPosition !== 5 ? e.dropPosition + 1 : 5;
        return newEgg;
      }),
    ];
    setDisplayedEggs((prev) => newEggs.filter((e) => !e.isDropped));
  };

  useEffect(() => {
    wolf.position = playerPosition;
  }, [playerPosition]);

  useEffect(() => {
    if (!player.hearts) {
      setMode("lost");
    }
  }, [player.hearts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value + 1);
      if (mode !== "notStarted" && mode !== "lost") {
        if (value % 2) {
          eggTick(displayedEggs);
       
         
          

        
          
        }
        if(!( value % 4)) {
          const keys: Position[] = [
            "UPPER_RIGHT",
            "UPPER_LEFT",
            "BOTTOM_RIGHT",
            "BOTTOM_LEFT",
          ];
          setDisplayedEggs((prev) => [
            ...displayedEggs,
            new EggModel(keys[Math.floor(Math.random() * 3) + 1], value),
          ]);
        }
      }
    }, mode === "easy" ? 1000 : mode === "medium" ? 700 : 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  useEffect(() => {
    if (hp === 0) {
      if (
        mode === "easy" &&
        +(localStorage.getItem("high-score-egg-cather-easy") ?? 0) < score
      ) {
        localStorage.setItem("high-score-egg-cather-easy", "" + score);
      }
      if (
        mode === "medium" &&
        +(localStorage.getItem("high-score-egg-cather-medium") ?? 0) < score
      ) {
        localStorage.setItem("high-score-egg-cather-medium", "" + score);
      }
      if (
        mode === "hard" &&
        +(localStorage.getItem("high-score-egg-cather-hard") ?? 0) < score
      ) {
        localStorage.setItem("high-score-egg-cather-hard", "" + score);
      }
      setMode("lost");
      setDisplayedEggs([]);
      setHp(3);
      setScore(0);
    }
    if (mode === "notStarted" || mode === "lost") {
      setDisplayedEggs([]);
      setHp(3);
      setScore(0);
    }
  }, [hp, mode]);

  return (
    <div className="app">
      <Screen />
      {mode !== "notStarted" && (
        <>
          <Wolf
            wolf={wolf}
            wolfPosition={playerPosition}
            setPlayerPosition={setPlayerPosition}
          />
          {displayedEggs.map((newEgg, i) => (
            <Egg key={i} egg={newEgg} playerPosition={playerPosition} />
          ))}
          <Hearts hearts={hp} />
          <Score score={score} />
        </>
      )}
      <Menu mode={mode} player={player} setMode={setMode} />
    </div>
  );
};

export default App;
