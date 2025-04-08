import { Bathroom } from "./bathroom.ts";

export class EntryHall {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil do vstupní haly`);
  }

  entryBathroom(): Bathroom {
    console.log(`${this.name} jde na toaletu`);
    return new Bathroom(this.name);
  }

  askReceptionistQuestion(question: string): EntryHall {
    console.log(`${this.name} se ptá recepční na otázku: ${question}`);
    console.log(`Recepční mlčí`);
    return this; // Vracíme instanci třídy EntryHall
  }
}
