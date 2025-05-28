export class Todo {
  id: number;
  text: string;
  done: boolean;

  constructor(text: string) {
    this.id = Date.now();
    this.text = text;
    this.done = false;
  }
}
