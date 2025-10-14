export class Vehicle{
    private speed:number=50;

    constructor(speed:number){
        this.speed = speed;
    }

    public getSpeedOfTheVehicle():void{
        console.log("The speed of the Vehicle is "+this.speed);
    }
}