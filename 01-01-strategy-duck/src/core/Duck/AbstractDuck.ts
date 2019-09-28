import IFlyBehavior from "./Fly/IFlyBehavior";
import IQuackBehavior from "./Quack/IQuackBehavior";

export default abstract class AbstractDuck {
    protected flyBehavior: IFlyBehavior;
    protected quackBehavior: IQuackBehavior;

    public constructor() {

    }

    public abstract display(): void;

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public swim(): void {
        console.log("All ducks float, even decoys!");
    }

    public setFlyBehavior(fb: IFlyBehavior): void {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: IQuackBehavior): void {
        this.quackBehavior = qb;
    }
}