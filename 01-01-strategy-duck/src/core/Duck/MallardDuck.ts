import AbstractDuck from "./AbstractDuck";
import Quack from "./Quack/Quack";
import FlyWithWings from "./Fly/FlyWithWings";

export default class MallardDuck extends AbstractDuck {

    public constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    public display():void {
        console.log("I'm a real Mallard duck");
    }
}