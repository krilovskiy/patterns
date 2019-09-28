import AbstractDuck from "./AbstractDuck";
import FlyNoWay from "./Fly/FlyNoWay";
import Quack from "./Quack/Quack";


export default class ModelDuck extends AbstractDuck {
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    public display(): void {
        console.log("I'm a model of a duck.");
    }
}