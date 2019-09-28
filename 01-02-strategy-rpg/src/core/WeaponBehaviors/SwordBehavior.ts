import IWeaponBehavior from "./IWeaponBehavior";

export default class SwordBehavior implements IWeaponBehavior {
    useWeapon(): void {
        console.log("Удар мечем");
    }
}
