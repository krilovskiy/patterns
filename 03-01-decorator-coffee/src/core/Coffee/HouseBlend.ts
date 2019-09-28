import {Beverage} from "../Beverage";

export class HouseBlend extends Beverage {
    public constructor() {
        super();
        this.beverageCost = 0.89;
        this.description = "This is house bland coffee"
    }
}
