import {CondimentDecorator} from "./CondimentDecorator";
import {Beverage} from "../Beverage";

export class Mocha extends CondimentDecorator {
    public constructor(protected beverage: Beverage) {
        super(beverage);
        this.additionalCost = 0.2;
    }


    public getDescription(): String {
        return this.beverage.getDescription() + ", Mocha";
    }
}
