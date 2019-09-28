import {CondimentDecorator} from "./CondimentDecorator";
import {Beverage} from "../Beverage";

export class Milk extends CondimentDecorator {
    public constructor(protected beverage: Beverage) {
        super(beverage);
        this.additionalCost = 0.1;
    }

    public getDescription(): String {
        return this.beverage.getDescription() + ", Milk";
    }
}
