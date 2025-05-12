export class Todo {
  id: number;
  text: string;
  isDone: boolean;

  constructor(text: string, isDone: boolean) {
    this.id = Date.now();
    this.isDone = isDone;
    this.text = text;
  }
}
