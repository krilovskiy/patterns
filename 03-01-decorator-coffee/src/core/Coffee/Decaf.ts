import {Beverage} from "../Beverage";

export class Decaf extends Beverage {
    public constructor() {
        super();
        this.description = "Decaf";
        this.beverageCost = 1.05;
    }
}
