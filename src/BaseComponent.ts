import { SystemWrapper, ComponentWrapper } from "aframe-typescript-toolkit"
import { getComponent, setComponent } from './index'

interface BaseComponentSchema {
    readonly speed: number
}

export class BaseComponent extends ComponentWrapper<BaseComponentSchema, BaseComponentSystem> {
    private offsetX: number = 0;
    private maxOffset = 2;
    private origin: {x: number, y: number};
    private dir = 1;
    // speed in units per second;
    private speed = 2.5;


    constructor() {
        super("base-component", {
            speed: {
                default: 4,
            },
        });
    }

    init() {
        this.system.add(this)
        AFRAME.utils.entity.setComponentProperty(this.el, "position.x", 0);
        this.speed = this.data.speed;
        this.setOrigin();
    }

    updateSchema(data: BaseComponentSchema){
        this.speed = data.speed;
    }

    tick(time: number, timeDelta:number) {
        let xPos: number = getComponent(this.el, "position.x");
        let newPos = xPos;
        newPos += this.speed * (timeDelta / 1000 ) * this.dir;
        setComponent(this.el, "position.x", newPos);
        if( Math.abs(xPos) > this.maxOffset ){
            setComponent(this.el, "position.x", this.maxOffset * this.dir);
            this.dir *=-1;
        }
    }

    private setOrigin(): void {
        this.origin = {
            x: getComponent(this.el, "position.x"),
            y: getComponent(this.el, "position.y"),
        }
    }
}


export class BaseComponentSystem extends SystemWrapper {
    constructor() {
        super("base-component")

        new BaseComponent().register()
    }

    play(){

    }

    add(component: BaseComponent) {
        const { speed } = component.data
        console.log("base component added");

    }
}