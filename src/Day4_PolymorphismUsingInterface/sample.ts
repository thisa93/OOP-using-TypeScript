interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area(): number {
    return this.width * this.height;
  }
}

function printArea(shape: Shape): void {
  console.log("Area:", shape.area());
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6)
];

shapes.forEach(printArea);