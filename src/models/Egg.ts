import { Position } from "./Wolf";

export type EggDropPosition = 1 | 2 | 3 | 4 | 5 | 6;

export class Egg {
  dropPosition: EggDropPosition;
  basketPosition: Position;
  isDropped: boolean
  id: number

  constructor(basketPosition: Position, id: number) {
    this.dropPosition = 1;
    this.basketPosition = basketPosition;
    this.id = id
    this.isDropped = false
  }

  roll() {
    if (this.dropPosition !== 6) {
      this.dropPosition++;
    }
  }
}
