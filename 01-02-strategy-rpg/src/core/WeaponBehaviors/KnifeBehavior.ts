import IWeaponBehavior from "./IWeaponBehavior";

export default class KnifeBehavior implements IWeaponBehavior {
    useWeapon(): void {
        console.log("Удар ножом");
    }
}
