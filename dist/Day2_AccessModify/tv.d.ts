export declare class Tv {
    private channel;
    private volumeLevel;
    private on;
    constructor(channel: number, volumeLevel: number, on: boolean);
    turnOn(): void;
    turnOff(): void;
    setChannel(newChannel: number): void;
    setVolume(newVolumeLevel: number): void;
    channelUp(): void;
    channelDown(): void;
    volumeUp(): void;
    volumeDown(): void;
}
//# sourceMappingURL=tv.d.ts.map