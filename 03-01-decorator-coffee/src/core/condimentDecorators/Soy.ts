import {CondimentDecorator} from "./CondimentDecorator";
import {Beverage} from "../Beverage";

export class Soy extends CondimentDecorator {
    public constructor(protected beverage: Beverage) {
        super(beverage);
        this.additionalCost = 0.15;
    }

    public getDescription(): String {
        return this.beverage.getDescription() + ", Soy";
    }
}
