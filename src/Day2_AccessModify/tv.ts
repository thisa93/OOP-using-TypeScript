export class Tv{
    private channel:number;
    private volumeLevel:number;
    private on:boolean

    public constructor(channel:number, volumeLevel:number, on:boolean){
        this.channel=channel;
        this.volumeLevel=volumeLevel;
        this.on=on;
    }

    public turnOn():void{
        this.on=true;
    }

    public turnOff():void{
        this.on=false;
    }

    public setChannel(newChannel:number):void{
        if(newChannel>=1 && newChannel<=120){
            this.channel=newChannel;
        }
        else{
            console.log("You entered "+newChannel+".\nThe channel values are 1 to 120 only")
        }
    }
    public setVolume(newVolumeLevel:number):void{
        if(newVolumeLevel>=1 && newVolumeLevel<=8){
            this.volumeLevel=newVolumeLevel;
        }
        else{
            console.log("You entered "+newVolumeLevel+".\n The default volume rage is 1 to 7 only.")
        }

    }
    public channelUp():void{
        this.channel+=1;
        console.log("The channel value increased by 1.\n New channel number is "+this.channel);
    }
    public channelDown():void{
        this.channel-+1;
        console.log("The channel value decreased by 1.\n New channel number is "+this.channel)
    }
    public volumeUp():void{
        this.volumeLevel+=1;
        console.log("The volume level is increased by 1.\n New channel number is "+this.volumeLevel);
    }
    public volumeDown():void{
        this.volumeLevel-=1;
        console.log("The volume level is decreased by 1.\n New channel number is "+this.volumeLevel);
    }
}