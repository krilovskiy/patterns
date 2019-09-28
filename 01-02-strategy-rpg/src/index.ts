import Character from "./core/Characters/Character";
import King from "./core/Characters/King";
import SwordBehavior from "./core/WeaponBehaviors/SwordBehavior";

let king: Character = new King();
king.fight();
king.setWeapon(new SwordBehavior());
king.fight();
