import { Shape } from "./Shape";

export class Rectangle extends Shape{
    private width:number;
    private length: number;

    constructor(width:number, length:number, colour:string, filled:boolean){
        super(colour,filled);
        this.width=width;
        this.length=length;
    }

    public setWidth(width:number):void{
        this.width=width;
    }

    public setLength(length:number):void{
        this.length=length;
    }

    public getWidth(){
        return this.width;
    }

    public getLength(){
        return this.length;
    }

    public getArea(){
        return (this.length*this.width);
    }

    public getPerimeter(){
        return (2*(this.length+this.width));
    }

    override toString():string{
        return `A rectangle width = ${this.width} and length = ${this.length}, which is a subclass of ${super.toString()}`;
    }
}