import IQuackBehavior from "./Duck/Quack/IQuackBehavior";
import Quack from "./Duck/Quack/Quack";

export default class DuckDecoy {
    private quackBehavior: IQuackBehavior;

    public constructor() {
        this.quackBehavior = new Quack();
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public setQuackBehavior(qb: IQuackBehavior) {
        this.quackBehavior = qb;
    }
}