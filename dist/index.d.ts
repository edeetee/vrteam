import { System, Component, ObjectMap, Entity } from 'aframe';
import 'super-hands';
export declare function main(): void;
export declare function getComponent(entity: Entity<ObjectMap<Component<any, System<any>>>>, componentName: string, delimiter?: string): any;
export declare function setComponent(entity: Entity<ObjectMap<Component<any, System<any>>>>, componentName: string, value: any, delimiter?: string): void;
