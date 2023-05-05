import React, { useState, SetStateAction, Dispatch } from "react";
import "./menu.scss";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GameMode, Player } from "./../models/Player";
interface MenuProps {
  mode: GameMode;
  player: Player;
  setMode: Dispatch<SetStateAction<GameMode>>;
}

const Menu: React.FC<MenuProps> = ({ mode, player, setMode }) => {
  const highScoreEasy: number = +(
    localStorage.getItem("high-score-egg-cather-easy") ?? 0
  );
  const highScoreMedium: number = +(
    localStorage.getItem("high-score-egg-cather-medium") ?? 0
  );
  const highScoreHard: number = +(
    localStorage.getItem("high-score-egg-cather-hard") ?? 0
  );

  return (
    <div className="menu">
      <Typography variant="h6" sx={{
        width: 500,
        textAlign: "center"
      }}>Управление стрелками</Typography>
      <div className="buttons">
        <Button
          onClick={() => {
            player.setMode("easy");
            setMode(player.mode);
          }}
          disabled={mode !== "notStarted"}
          sx={{ width: 200 }}
          variant="outlined"
        >
          Начать легкую
        </Button>
        <Button
          onClick={() => {
            player.setMode("medium");
            setMode(player.mode);
          }}
          disabled={mode !== "notStarted"}
          sx={{ width: 200 }}
          variant="outlined"
        >
          Начать среднюю
        </Button>
        <Button
          onClick={() => {
            player.setMode("hard");
            setMode(player.mode);
          }}
          disabled={mode !== "notStarted"}
          sx={{ width: 200 }}
          variant="outlined"
        >
          Начать сложную
        </Button>
        <Button
          onClick={() => {
            player.setMode("notStarted");
            setMode(player.mode);
          }}
          disabled={mode === "notStarted"}
          sx={{ width: 200 }}
          variant="outlined"
        >
          Стоп
        </Button>
      </div>
      <Typography
        variant="h6"
        sx={{
          width: 500,
          textAlign: "center",
        }}
      >
        Статус игры:
        {mode === "notStarted" && "игра не началась"}
        {mode === "easy" ||
          mode === "medium" ||
          (mode === "hard" && "игра идет")}
        {mode === "lost" && (
          <span
            style={{
              color: "red",
            }}
          >
            вы проиграли
          </span>
        )}
      </Typography>
      <Typography variant="body2" sx={{ width: 250, textAlign: "center" }}>
        Рекорд(легкая сложность): {highScoreEasy}
      </Typography>
      <Typography variant="body2" sx={{ width: 250, textAlign: "center" }}>
        Рекорд(средняя сложность): {highScoreMedium}
      </Typography>
      <Typography variant="body2" sx={{ width: 250, textAlign: "center" }}>
        Рекорд(высокая сложность): {highScoreHard}
      </Typography>
    </div>
  );
};

export default Menu;
