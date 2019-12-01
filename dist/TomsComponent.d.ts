import { SystemWrapper, ComponentWrapper } from "aframe-typescript-toolkit";
interface TomsComponentSchema {
    readonly a: string;
    readonly b: string;
}
export declare class TomsComponent extends ComponentWrapper<TomsComponentSchema, TomsComponentSystem> {
    constructor();
    init(): void;
    play(): void;
}
export declare class TomsComponentSystem extends SystemWrapper {
    constructor();
    add(component: TomsComponent): void;
}
export declare function test(): void;
export {};
