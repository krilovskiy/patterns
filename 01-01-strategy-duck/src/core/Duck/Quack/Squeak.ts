import IQuackBehavior from "./IQuackBehavior";

export default class Squeak implements IQuackBehavior {
    public quack(): void {
        console.log("Squeak");
    }
}