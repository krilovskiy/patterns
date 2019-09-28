import IWeaponBehavior from "./IWeaponBehavior";

export default class AxeBehavior implements IWeaponBehavior {
    useWeapon(): void {
        console.log("Удар топором");
    }
}
