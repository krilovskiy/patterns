import {DarkRoast} from "./core/Coffee/DarkRoast";
import {Milk} from "./core/condimentDecorators/Milk";
import {Mocha} from "./core/condimentDecorators/Mocha";
import {Beverage} from "./core/Beverage";
import {Soy} from "./core/condimentDecorators/Soy";
import {Whip} from "./core/condimentDecorators/Whip";
import {HouseBlend} from "./core/Coffee/HouseBlend";

let bought: Beverage = (new DarkRoast()).add(Milk).add(Mocha);
console.log(bought.cost());
console.log(bought.getDescription());
let anotherBought: Beverage = new HouseBlend();

// js way
// @ts-ignore
for (let item: any of [Milk, Soy, Whip, Mocha]) {
    // @ts-ignore
    anotherBought = anotherBought.add(item);
    console.log(anotherBought.cost());
}
console.log(anotherBought.getDescription());
