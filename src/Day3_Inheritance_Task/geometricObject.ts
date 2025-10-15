export class GeometricObject{
    private color:string;
    private filled:boolean;
    private dateCreated:Date

    constructor(color:string, filled:boolean, dateCreated:Date){
        this.color=color;
        this.filled=filled;
        this.dateCreated= new Date();
    }
    public getColor(){
        return this.color;
    }

    public setColor(color:string):void{
        this.color=color;
    }

    public isFilled(){
        return this.filled;
    }

    public setFilled(filled:boolean){
        this.filled=filled;
    }

    public getDateCreated(){
        return this.dateCreated
    }
}