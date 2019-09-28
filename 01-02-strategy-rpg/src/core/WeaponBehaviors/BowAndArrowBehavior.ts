import IWeaponBehavior from "./IWeaponBehavior";

export default class BowAndArrowBehavior implements IWeaponBehavior {
    useWeapon(): void {
        console.log("Выстрел из лука");
    }
}
