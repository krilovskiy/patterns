import Character from "./Character";
import KnifeBehavior from "../WeaponBehaviors/KnifeBehavior";

export default class Queen extends Character {
    constructor() {
        super();
        this.weapon = new KnifeBehavior();
    }
}
