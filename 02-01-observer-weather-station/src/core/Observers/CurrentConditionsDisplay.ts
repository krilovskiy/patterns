import IObserver from "./IObserver";
import IDisplayElement from "../DisplayElements/IDisplayElement";
import ISubject from "../Subject/ISubject";

interface ICtxOpts {
    name: string;
    subject: ISubject;
}

export default class CurrentConditionsDisplay implements IObserver, IDisplayElement {
    private temp;
    private hum;
    private pressure;

    private readonly weatherData: ISubject;
    private readonly name;

    constructor(props:ICtxOpts) {
        this.name = props.name;
        this.weatherData = props.subject;
        this.weatherData.registerObserver(this);
    }


    public display(): void {
        console.dir(`Common display ${this.name}: ${JSON.stringify({temp: this.temp, hum: this.hum, pressure: this.pressure})}` );
    }

    public update(temp, hum, press): void {
        this.temp = temp;
        this.hum = hum;
        this.pressure = press;
        this.display();
    }

}
