import Character from "./Character";
import BowAndArrowBehavior from "../WeaponBehaviors/BowAndArrowBehavior";

export default class King extends Character {
    constructor() {
        super();
        this.weapon = new BowAndArrowBehavior();
    }
}
