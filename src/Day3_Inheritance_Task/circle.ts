import { GeometricObject } from "./geometricObject";

export class Circle extends GeometricObject{
    private radius:number;
    
    public constructor(radius:number,color:string,filled:boolean, dateCreated:Date){
        super(color,filled,dateCreated);
        this.radius=radius;
    }

    public getRadius():number{
        return this.radius;
    }

    public setRadius(radius:number):void{
        this.radius=radius;
    }

    public getArea():number{
        return (Math.PI*Math.pow(this.radius,2));
    }

    public getPerimeter():number{
        return (2*Math.PI*this.radius);
    }

    public getDiameter():number{
        return (2*this.radius);
    }
}