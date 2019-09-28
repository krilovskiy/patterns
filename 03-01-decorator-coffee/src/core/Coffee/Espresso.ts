import {Beverage} from "../Beverage";

export class Espresso extends Beverage {
    public constructor(){
        super();
        this.description = "Espresso";
        this.beverageCost = 1.99;
    }
}
