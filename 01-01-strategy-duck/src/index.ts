import AbstractDuck from "./Duck/AbstractDuck";
import MallardDuck from "./Duck/MallardDuck";
import ModelDuck from "./Duck/ModelDuck";
import FlyWithRocket from "./Duck/Fly/FlyWithRocket";
import DuckDecoy from "./DuckDecoy";
import MuteQuack from "./Duck/Quack/MuteQuack";
import Squeak from "./Duck/Quack/Squeak";

let mallard: AbstractDuck = new MallardDuck();
mallard.performQuack();
mallard.performFly();
mallard.display();
mallard.swim();

console.log("=================");

let model:AbstractDuck = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyWithRocket());
model.performFly();

console.log("=================");

let decoy = new DuckDecoy();
decoy.performQuack();
decoy.setQuackBehavior(new MuteQuack());
decoy.performQuack();
decoy.setQuackBehavior(new Squeak());
decoy.performQuack();