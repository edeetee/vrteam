import { ComponentWrapper, SystemWrapper } from './AbstractWrappers';
import { Entity } from 'aframe';
export declare abstract class EntitiesComponent<MappedEntitiesSystem extends EntitiesSystem, SCHEMA extends object = {}> extends ComponentWrapper<MappedEntitiesSystem, SCHEMA> {
    init(): void;
    remove(): void;
}
export declare abstract class EntitiesSystem extends SystemWrapper {
    entities: Entity[];
    add(entity: Entity): void;
    remove(entity: Entity): void;
}
