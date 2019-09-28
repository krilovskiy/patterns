import IWeaponBehavior from "../WeaponBehaviors/IWeaponBehavior";

export default abstract class Character {
    protected weapon: IWeaponBehavior;

    public fight(): void {
        this.weapon.useWeapon();
    }

    public setWeapon(wb: IWeaponBehavior ) {
        this.weapon = wb;
    }
}
