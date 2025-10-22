export class Shape{
    private colour:string;
    private filled: boolean;

    constructor(colour:string, filled:boolean){
        this.colour = colour;
        this.filled = filled;
    }

    public getColour(){
        return this.colour;
    }

    public getFilled(){
        return this.filled;
    }

    public setColour(colour:string):void{
        this.colour=colour;
    }

    public setFilled(filled:boolean):void{
        this.filled=filled;
    }

    public toString():string{
        return `A shape with colour ${this.colour} and ${this.filled ? "filled" : "not filled"}.`;
    }
}