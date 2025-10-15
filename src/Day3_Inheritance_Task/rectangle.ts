import { GeometricObject } from "./geometricObject";

export class Rectangle extends GeometricObject{
    private width:number;
    private height:number;

    constructor(width:number, height:number,color:string, filled:boolean, dateCreated:Date){
        super(color,filled,dateCreated);
        this.width=width;
        this.height=height;
    }
}