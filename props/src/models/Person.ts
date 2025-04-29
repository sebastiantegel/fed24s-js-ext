export class Person {
  id: number;

  constructor(
    public name: string,
    public age: number,
    public isMarried: boolean
  ) {
    this.id = Date.now();
  }
}
