import {Beverage} from "../Beverage";

export class DarkRoast extends Beverage {
    public constructor() {
        super();
        this.beverageCost = 0.99;
        this.description = "Dark Roast coffee";
    }
}
