export type GameMode = 'easy' | 'medium' | 'hard' | 'notStarted' | 'lost'

export class Player {
  mode: GameMode
  hearts: number
  score: number

  constructor(score?: number, mode?: GameMode) {
    this.hearts = 3
    this.score = score ?? 0
    this.mode = mode ?? 'notStarted'
  }

  setMode(mode: GameMode) {
    this.mode = mode
  }
}