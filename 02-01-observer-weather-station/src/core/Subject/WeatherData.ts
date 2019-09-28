import ISubject from "./ISubject";
import IObserver from "../Observers/IObserver";

export default class WeatherData implements ISubject {
    //private observers: Map<number, IObserver> = new Map();
    private observers: Set<IObserver> = new Set();
    private currentId: number = 0;

    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    constructor() {
        setInterval(this.updateValues.bind(this), 1000);
    }

    private updateValues() {
        this.pressure++;
        this.humidity++;
        this.temperature++;
        this.notifyObservers();
    }

    public notifyObservers(): void {
        for (let obj of this.observers) {
            obj.update(this.temperature, this.humidity, this.pressure);
        }
    }

    public registerObserver(ob: IObserver) {
        this.observers.add(ob);
    }

    public removeObserver(ob: IObserver): void {
        let has = this.observers.has(ob);
        if (has) {
            this.observers.delete(ob);
        }
    }


    public getTemperature(): number {
        return this.temperature;
    }

    public getHumidity(): number {
        return this.temperature;
    }

    public getPressure(): number {
        return this.pressure;
    }

}
