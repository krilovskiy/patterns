import WeatherData from "./core/Subject/WeatherData";
import CCDisplay from "./core/Observers/CurrentConditionsDisplay";
import ForecastDisplay from "./core/Observers/ForecastDisplay";

let wd = new WeatherData();
//let dsp1 = new CCDisplay({name: "1", subject: wd});
//let dsp2 = new CCDisplay({name: "2", subject: wd});
let forecastDisplay = new ForecastDisplay({subject: wd});

let arr = [];

for (let i = 0; i < 2; i++) {
    arr.push(new CCDisplay({name: i.toString(), subject: wd}));
}

function remover() {
    let obj = arr.pop();
    obj = null;
    console.log(arr);
}

setTimeout(remover, 5000);
