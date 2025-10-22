import { Shape } from "./Shape";
export declare class Rectangle extends Shape {
    private width;
    private length;
    constructor(width: number, length: number, colour: string, filled: boolean);
    setWidth(width: number): void;
    setLength(length: number): void;
    getWidth(): number;
    getLength(): number;
    getArea(): number;
    getPerimeter(): number;
    toString(): string;
}
//# sourceMappingURL=Rectangle.d.ts.map