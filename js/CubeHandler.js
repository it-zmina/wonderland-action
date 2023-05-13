import {Component, Property} from '@wonderlandengine/api';
import {quat} from "gl-matrix";

/**
 * CubeHandler
 */
export class CubeHandler extends Component {
    static TypeName = 'CubeHandler';
    /* Properties that are configurable in the editor */
    static Properties = {
        param: Property.float(1.0)
    };
    /* Add other component types here that your component may
     * create. They will be registered with this component */
    static Dependencies = [];

    init() {
        console.log('init() with param', this.param);
        this.rotation = new Float32Array(4)
        quat.fromEuler(this.rotation, 1, 1, 0)
        this.tmpQuat = quat.create()
    }

    start() {
        console.log('start() with param', this.param);
        this.cube = this.object
        console.log('Object ready for action. Object name: ' + this.cube.name)
    }

    update(dt) {
        /* Called every frame. */
        // console.log('update() with delta time', dt)
        quat.scale(this.tmpQuat, this.rotation, dt)
        this.cube.rotateObject(this.tmpQuat)
    }
}
