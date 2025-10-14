"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const vehicle_1 = require("./vehicle");
class Bike extends vehicle_1.Vehicle {
    speedOfBike = 100;
    constructor(speed, speedOfBike) {
        super(speed);
        this.speedOfBike = speedOfBike;
    }
    getSpeedOfTheBike() {
        console.log("Speed of the Bike is " + this.speedOfBike);
    }
}
exports.Bike = Bike;
//# sourceMappingURL=bike1.js.map