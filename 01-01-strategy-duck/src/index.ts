import AbstractDuck from "./core/Duck/AbstractDuck";
import MallardDuck from "./core/Duck/MallardDuck";
import ModelDuck from "./core/Duck/ModelDuck";
import FlyWithRocket from "./core/Duck/Fly/FlyWithRocket";
import DuckDecoy from "./core/DuckDecoy";
import MuteQuack from "./core/Duck/Quack/MuteQuack";
import Squeak from "./core/Duck/Quack/Squeak";

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
