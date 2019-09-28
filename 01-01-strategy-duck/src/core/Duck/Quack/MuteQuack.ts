import IQuackBehavior from "./IQuackBehavior";

export default class MuteQuack implements IQuackBehavior {
    public quack(): void {
        console.log("<< Silence >>");
    }
}