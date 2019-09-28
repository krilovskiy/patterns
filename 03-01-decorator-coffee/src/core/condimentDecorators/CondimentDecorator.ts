import {Beverage} from "../Beverage";

export abstract class CondimentDecorator extends Beverage {
    protected additionalCost: number = 0;
    protected constructor(protected beverage: Beverage) {
        super();
    }
    public abstract getDescription(): String;

    public cost(): number {
        return this.additionalCost + this.beverage.cost();
    }
}
