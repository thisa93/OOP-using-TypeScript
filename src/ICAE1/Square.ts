import { Rectangle } from "./Rectangle";

export class Square extends Rectangle{
    constructor(side:number, colour:string, filled:boolean){
        super(side, side, colour, filled);
    }

    public getSide(){
        return super.getWidth();
    }

    public setSide(side:number){
        this.setWidth(side);
        this.setLength(side);
    }

    override toString():string{
        return `A Ractangle width = ${this.getWidth()} and length = ${this.getLength()}, which is a subclass of ${super.toString()}`;
    }
}