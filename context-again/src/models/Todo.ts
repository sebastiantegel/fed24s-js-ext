export class Todo {
  id: number;
  text: string;
  isDone: boolean;

  constructor(text: string) {
    this.id = Date.now();
    this.text = text;
    this.isDone = false;
  }
}
