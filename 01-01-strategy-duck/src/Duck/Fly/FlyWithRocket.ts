import IFlyBehavior from "./IFlyBehavior";

export default class FlyWithRocket implements IFlyBehavior {
    public fly(): void {
        console.log("SOO FAST Rocket-fly!");
    }
}