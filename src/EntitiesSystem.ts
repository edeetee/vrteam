import {ComponentWrapper, SystemWrapper} from './AbstractWrappers'
import { Entity } from 'aframe'

export abstract class EntitiesComponent<MappedEntitiesSystem extends EntitiesSystem, SCHEMA extends object = {}> 
    extends ComponentWrapper<MappedEntitiesSystem, SCHEMA> {

    init() {
        this.system.add(this.el)
    }

    remove() {
        this.system.remove(this.el)
    }
}

export abstract class EntitiesSystem extends SystemWrapper {
    entities: Entity[] = []

    add(entity: Entity) {
        this.entities.push(entity)
    }

    remove(entity: Entity){
        this.entities = this.entities.filter(ent => ent != entity)
    }
}