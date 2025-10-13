"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
class Tv {
    channel;
    volumeLevel;
    on;
    constructor(channel, volumeLevel, on) {
        this.channel = channel;
        this.volumeLevel = volumeLevel;
        this.on = on;
    }
    turnOn() {
        this.on = true;
    }
    turnOff() {
        this.on = false;
    }
    setChannel(newChannel) {
        if (newChannel >= 1 && newChannel <= 120) {
            this.channel = newChannel;
        }
        else {
            console.log("You entered " + newChannel + ".\nThe channel values are 1 to 120 only");
        }
    }
    setVolume(newVolumeLevel) {
        if (newVolumeLevel >= 1 && newVolumeLevel <= 8) {
            this.volumeLevel = newVolumeLevel;
        }
        else {
            console.log("You entered " + newVolumeLevel + ".\n The default volume rage is 1 to 7 only.");
        }
    }
    channelUp() {
        this.channel += 1;
        console.log("The channel value increased by 1.\n New channel number is " + this.channel);
    }
    channelDown() {
        this.channel - +1;
        console.log("The channel value decreased by 1.\n New channel number is " + this.channel);
    }
    volumeUp() {
        this.volumeLevel += 1;
        console.log("The volume level is increased by 1.\n New channel number is " + this.volumeLevel);
    }
    volumeDown() {
        this.volumeLevel -= 1;
        console.log("The volume level is decreased by 1.\n New channel number is " + this.volumeLevel);
    }
}
exports.Tv = Tv;
//# sourceMappingURL=tv.js.map