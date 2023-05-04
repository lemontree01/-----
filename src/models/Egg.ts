import { Position } from "./Wolf";

export type EggDropPosition = 1 | 2 | 3 | 4 | 5;

export class Egg {
  dropPosition: EggDropPosition;
  basketPosition: Position;

  constructor(basketPosition: Position) {
    this.dropPosition = 4;
    this.basketPosition = basketPosition;
  }

  roll() {
    if (this.dropPosition !== 5) {
      this.dropPosition++;
    } else {
      this.dropPosition = 1;
    }
  }
}
