import { Vehicle } from "./vehicle";

export class Bike extends Vehicle{
    private speedOfBike:number = 100;

    constructor(speed:number, speedOfBike:number){
        super(speed);
        this.speedOfBike=speedOfBike;
    }

    public getSpeedOfTheBike():void{
        console.log("Speed of the Bike is "+this.speedOfBike);
    }
}