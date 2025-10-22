import { Shape } from "./Shape";

export class Circle extends Shape{
    private radius:number;

    constructor(radius:number, colour:string, filled:boolean){
        super(colour, filled);
        this.radius = radius;
    }

    public getRadius(){
        return this.radius;
    }

    public setRadius(radius:number){
        this.radius=radius;
    }

    public getArea(){
        return (Math.PI*Math.pow(this.radius,2));
    }

    public getPerimeter(){
        return (2*Math.PI*this.radius);
    }

    override toString():string{
        return `A circle with radius = ${this.radius}, which is a subclass of ${super.toString()};`
    }
}