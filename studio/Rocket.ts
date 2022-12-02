import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {

    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronaut: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {

        // need to return the summ 
        let myTotalMass = 0;
        for (let i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    }
    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronaut);
    }
    //     let cargoMassTotal = this.sumMass(this.cargoItems);
    //     let astronautMassTotal = this.sumMass(this.astronauts);
    //     let massTotal = cargoMassTotal + astronautMassTotal;
    //     return massTotal;
    // }
    canAdd(item: Payload): boolean {

        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo(cargo: Cargo): boolean {
        let itCanAddIt = this.canAdd(cargo);
        if (itCanAddIt) {
            this.cargoItems.push(cargo);
            return true;

        } else {
            return false;

        }
    }
    addAstronaut(astronaut: Astronaut): boolean {

        let itCanAddIt = this.canAdd(astronaut);
        if (itCanAddIt) {
            this.astronaut.push(astronaut);
            return true;

        } else {
            return false;
        }
    }

}
