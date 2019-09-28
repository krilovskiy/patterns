import IObserver from "./IObserver";
import IDisplayElement from "../DisplayElements/IDisplayElement";
import ISubject from "../Subject/ISubject";

interface ICtxOpts {
    subject: ISubject
}

export default class ForecastDisplay implements IObserver, IDisplayElement {
    private temp;
    private hum;
    private pressure;

    private weatherData: ISubject;

    constructor(opts: ICtxOpts) {
        this.weatherData = opts.subject;
        this.weatherData.registerObserver(this);
    }

    public display(): void {
        console.dir(`Forecast for: ${JSON.stringify({temp: this.temp, hum: this.hum, pressure: this.pressure})}` );
    }

    public update(temp, hum, press): void {
        this.temp = temp;
        this.hum = hum;
        this.pressure = press;
        this.display();
    }

}
