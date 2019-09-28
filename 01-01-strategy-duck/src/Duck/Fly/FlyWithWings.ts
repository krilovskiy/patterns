import IFlyBehavior from "./IFlyBehavior";

export default class FlyWithWings implements IFlyBehavior {
    public fly(): void {
        console.log("I'm flying!");
    }
}