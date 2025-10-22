import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Square } from "./Square";

export class ShapeDemo{

    public shepeDemoActions(){
        const shape1 = new Shape("red",true);
        const circle1 = new Circle(7.0,"red",true);
        const circle2 = new Circle(2.1,"blue",false);
        const rectangle1 = new Rectangle(20,30,"red",true);
        const rectangle2 = new Rectangle(35.5,45.6,"yellow",false);
        const sqr = new Square(50,"green",true);

        console.log(sqr.toString());
    }
    
}