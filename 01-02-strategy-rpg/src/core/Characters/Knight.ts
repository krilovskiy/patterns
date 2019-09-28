import Character from "./Character";
import SwordBehavior from "../WeaponBehaviors/SwordBehavior";

export default class Knight extends Character {
    constructor() {
        super();
        this.weapon = new SwordBehavior();
    }
}
