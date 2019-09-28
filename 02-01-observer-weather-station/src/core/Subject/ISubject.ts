import IObserver from "../Observers/IObserver";

export default interface ISubject {
    registerObserver(ob: IObserver): void;
    removeObserver(ob: IObserver): void;
    notifyObservers(): void;
}
