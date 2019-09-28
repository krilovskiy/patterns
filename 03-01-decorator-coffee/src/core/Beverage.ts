import {CondimentDecorator} from "./condimentDecorators/CondimentDecorator";

export abstract class Beverage {
    protected description: String = "";
    protected beverageCost: number = 0;

    public cost(): number {
        return this.beverageCost;
    }

    public getDescription(): String {
        return this.description;
    }

    public add<T extends CondimentDecorator>(condiment: new (beverage: Beverage) => T): T {
        return new condiment(this);
    }
}
