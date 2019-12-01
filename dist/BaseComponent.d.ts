import { SystemWrapper, ComponentWrapper } from "aframe-typescript-toolkit";
interface BaseComponentSchema {
    readonly speed: number;
}
export declare class BaseComponent extends ComponentWrapper<BaseComponentSchema, BaseComponentSystem> {
    private offsetX;
    private maxOffset;
    private origin;
    private dir;
    private speed;
    constructor();
    init(): void;
    updateSchema(data: BaseComponentSchema): void;
    tick(time: number, timeDelta: number): void;
    private setOrigin;
}
export declare class BaseComponentSystem extends SystemWrapper {
    constructor();
    play(): void;
    add(component: BaseComponent): void;
}
export {};
