export type WolfPosition =
  | "UPPER_RIGHT"
  | "UPPER_LEFT"
  | "BOTTOM_RIGHT"
  | "BOTTOM_LEFT";

export class Wolf {
  position: WolfPosition;
  constructor() {
    this.position = "UPPER_RIGHT";
  }

  moveUp() {
    if (this.position === "BOTTOM_LEFT") {
      this.position = "UPPER_LEFT";
    }
    if (this.position === "BOTTOM_RIGHT") {
      this.position = "UPPER_RIGHT";
    }
  }

  moveDown() {
    if (this.position === "UPPER_LEFT") {
      this.position = "BOTTOM_LEFT";
    }
    if (this.position === "UPPER_RIGHT") {
      this.position = "BOTTOM_RIGHT";
    }
  }

  moveLeft() {
    if (this.position === "UPPER_RIGHT") {
      this.position = "UPPER_LEFT";
    }
    if (this.position === "BOTTOM_RIGHT") {
      this.position = "BOTTOM_LEFT";
    }
  }

  moveRight() {
    if (this.position === "UPPER_LEFT") {
      this.position = "UPPER_RIGHT";
    }
    if (this.position === "BOTTOM_LEFT") {
      this.position = "BOTTOM_RIGHT";
    }
  }
}
