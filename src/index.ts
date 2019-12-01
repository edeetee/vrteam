import { BaseComponentSystem, BaseComponent } from './BaseComponent';
import { System, Component, ObjectMap, Entity } from 'aframe';
import 'super-hands';

let system: BaseComponentSystem;

export function main(){

    system = new BaseComponentSystem();
    system.register();

    let component: BaseComponent = new BaseComponent();
    const el = document.createElement("a-sphere")
    el.setAttribute("base-component", "a: " + "a" + "; b: " + "a,b,c");

    const scene = document.getElementById("scene");
    scene.appendChild(el);
    
}

window.addEventListener("load", () => {
    main();
});

export function getComponent(entity: Entity<ObjectMap<Component<any, System<any>>>>, componentName: string, delimiter?: string){
    return AFRAME.utils.entity.getComponentProperty(entity,componentName, delimiter);
}

export function setComponent(entity: Entity<ObjectMap<Component<any, System<any>>>>, componentName: string, value: any, delimiter?: string) {
     AFRAME.utils.entity.setComponentProperty(entity,componentName, value, delimiter);
}