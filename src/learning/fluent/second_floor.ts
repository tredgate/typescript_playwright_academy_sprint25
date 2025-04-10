// second_floor.ts
import { EntryHall } from "./entry_hall.ts";

export class SecondFloor {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`Uživatel ${this.name} vstoupil do druhého patra.`);
  }

  async lookAround(length: number): Promise<SecondFloor> {
    const lengthMs = length * 1000;
    console.log(
      `Uživatel ${this.name} se rozhlíží po druhém patře po dobu ${length} sekund.`
    );
    await new Promise((resolve) => setTimeout(resolve, lengthMs));
    console.log(`Uživatel ${this.name} se rozhlédl po druhém patře.`);
    return this;
  }

  async returnToEntryHallByElevator(): Promise<EntryHall> {
    console.log(`Uživatel ${this.name} si volá výtah do vstupní haly.`);
    const waitingForElevatorMs = 2000; // Čekání na výtah 2 sekundy
    // Simulace čekání na výtah
    await new Promise((resolve) => setTimeout(resolve, waitingForElevatorMs));
    // Výtah přijíždí
    console.log(`Výtah přijel do druhého patra.`);
    console.log(`Výtah dorazil, uživatel ${this.name} nastupuje.`);
    // Jízda výtahem 2 sekundy
    const elevatorRideMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, elevatorRideMs));
    console.log(`Uživatel ${this.name} vystupuje z výtahu ve vstupní hale.`);
    return new EntryHall(this.name);
  }
}
