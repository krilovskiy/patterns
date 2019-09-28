import IQuackBehavior from "./IQuackBehavior";

export default class Quack implements IQuackBehavior {
    public quack(): void {
        console.log("Quack");
    }
}