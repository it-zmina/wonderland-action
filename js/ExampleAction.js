import {Component, Property} from '@wonderlandengine/api';

/**
 * ExampleAction
 */
export class ExampleAction extends Component {
    static TypeName = 'ExampleAction';
    /* Properties that are configurable in the editor */
    static Properties = {
        param: Property.float(1.0)
    };
    /* Add other component types here that your component may
     * create. They will be registered with this component */
    static Dependencies = [];

    init() {
        console.log('init() with param', this.param);
    }

    start() {
        console.log('start() with param', this.param);
    }

    update(dt) {
        /* Called every frame. */
    }
}
