export class Car {
  brand: string;
  model: string;
  color: string;
  mileage: number;

  constructor(brand: string, model: string, color: string) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.mileage = 0;
  }
}
