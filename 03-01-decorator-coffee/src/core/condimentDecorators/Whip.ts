import {CondimentDecorator} from "./CondimentDecorator";
import {Beverage} from "../Beverage";

export class Whip extends CondimentDecorator {
    public constructor(protected beverage: Beverage) {
        super(beverage);
        this.additionalCost = .1;
    }
    
    public getDescription(): String {
        return this.beverage.getDescription() + ", Whip";
    }
        
}
