import React, { useState } from "react";
import { Wolf as WolfModel } from "./models/Wolf";
import { Egg as EggModel } from "./models/Egg";
import Wolf from "./components/Wolf";
import Egg from "./components/Egg";
import Screen from "./components/Screen";
import "./styles.scss";
import Hearts from "./components/Hearts";
import { GameMode, Player } from "./models/Player";
import Score from "./components/Score";
import Menu from "./components/Menu";

const App = () => {
  const [mode, setMode] = useState<GameMode>("notStarted");
  const player = new Player();
  const wolf = new WolfModel();

  const eggs: EggModel[] = [];

  const spawnEgg = () => {};

  return (
    <div className="app">
      <Screen />
      {mode !== "notStarted" && (
        <>
          <Wolf wolf={wolf} />
          {eggs.map((newEgg) => (
            <Egg egg={newEgg} />
          ))}
          <Hearts hearts={player.hearts} />
          <Score score={player.score} />
        </>
      )}
      <Menu />
    </div>
  );
};

export default App;
