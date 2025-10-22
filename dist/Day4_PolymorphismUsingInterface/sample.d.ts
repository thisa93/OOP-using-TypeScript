export interface Shape {
    area(): number;
}
export declare class Circle implements Shape {
    private radius;
    constructor(radius: number);
    area(): number;
}
export declare class Rectangle implements Shape {
    private width;
    private height;
    constructor(width: number, height: number);
    area(): number;
}
//# sourceMappingURL=sample.d.ts.map