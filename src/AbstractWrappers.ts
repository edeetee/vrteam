import * as AFrame from "aframe"

/**
 * Extend this class to create strongly typed A-Frame components. 
 * Default implementations for component lifecycle methods such as init(), tick(), and others are provided,
 * and can be overridden for your component's specific behavior.
 */

export abstract class ComponentWrapper<SYSTEM extends AFrame.System = AFrame.System, SCHEMA extends object = {}> 
        implements AFrame.Component<SCHEMA, SYSTEM> {

    el: AFrame.Entity
    id: string
    data: SCHEMA
    system: SYSTEM

    readonly schema: AFrame.Schema<SCHEMA>
    readonly name: string

    constructor(name: string, schema?: AFrame.Schema<SCHEMA>) {
        this.name = name
        this.schema = schema || {}
        AFrame.registerComponent(name, this)
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // default aframe core function implementations

    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_remove.
     */
    remove() {}
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_update.
     */
    update(oldData: {}) {}
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_updateschema.
     */
    extendSchema(update: {}) {}
    flushToDOM() {}

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // default aframe core function implementations

    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_init.
     */
    init() {}
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_pause.
     */
    pause() {}
    /**
     * Wraps https://aframe.io/docs/0.8.0/core/component.html#definition_lifecycle_handler_methods_play.
     */
    play() {}

    destroy() {
        const parent = this.el.parentElement
        if (!!parent) {
            parent.removeChild(this.el)
        }
    }

    registerCallback(callbackName: string, fn: Function) {
        this.el.addEventListener(callbackName, fn.bind(this))
    }
}

export abstract class SystemWrapper<SCHEMA extends { [key: string]: any } = {}> 
        implements AFrame.System {

    data: SCHEMA
    
    readonly schema: AFrame.Schema<SCHEMA> = {}
    readonly name: string

    constructor(name: string, schema?: AFrame.Schema<SCHEMA>){
        this.name = name
        this.schema = schema || {}
        AFRAME.registerSystem(name, this)
    }

    init() {}
    pause() {}
    play() {}
}