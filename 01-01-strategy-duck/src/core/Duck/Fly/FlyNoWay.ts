import IFlyBehavior from "./IFlyBehavior";

export default class FlyNoWay implements IFlyBehavior {
    public fly(): void {
        console.log("I can't flying!");
    }
}