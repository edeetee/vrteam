// import { ComponentWrapper, SystemWrapper } from "./AbstractWrappers"
import { EntitiesSystem, EntitiesComponent } from "./EntitiesSystem"

interface SphereRegistryComponentSchema {
    readonly color: string
    readonly position: string
}

export class SphereRegistryComponent extends EntitiesComponent<SphereRegistrySystem, SphereRegistryComponentSchema> {
    constructor(){
        super("sphere-registry",
            {
                color: {
                    default: "",
                },
                position: {
                    default: "",
                },
            })
    }

    
}

export class SphereRegistrySystem extends EntitiesSystem {
    constructor() {
        super("sphere-registry")
        new SphereRegistryComponent()
    }
}

new SphereRegistrySystem()