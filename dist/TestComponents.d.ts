import { EntitiesSystem, EntitiesComponent } from "./EntitiesSystem";
interface SphereRegistryComponentSchema {
    readonly color: string;
    readonly position: string;
}
export declare class SphereRegistryComponent extends EntitiesComponent<SphereRegistrySystem, SphereRegistryComponentSchema> {
    constructor();
}
export declare class SphereRegistrySystem extends EntitiesSystem {
    constructor();
}
export {};
