export class Person {
  id: number;

  constructor(
    public name: string,
    public age: number,
    public isMarried: boolean,
  ) {
    this.id = Date.now();
  }
}

export const defaultValue: Person = {
  id: 0,
  name: "",
  age: 0,
  isMarried: false,
};
