import { Bathroom } from "./bathroom.ts";
import { SecondFloor } from "./second_floor.ts";

export class EntryHall {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil do vstupní haly.`);
  }

  entryBathroom(): Bathroom {
    // ? : Bathroom je typová anotace (metoda vždy vrátí objekt z  class Bathroom)
    console.log(`${this.name} jde na toaletu.`);
    return new Bathroom(this.name);
  }

  askReceptionistQuestion(question: string): EntryHall {
    console.log(
      `Návštěvník ${this.name} se ptá recepční na otázku: "${question}"`
    );
    console.log("Recepční mlčí.");
    return this; // vracíme aktuální instanci objektu (EntryHall)
    // return new EntryHall(this.name); // ! V rámci zůstávání na stejném objektu vracíme this, technicky ale objekt vytvořit půjde (bude to ale pomalejší a náročnější na zdroje)
  }

  async takeElevatorToSecondFloor(): Promise<SecondFloor> {
    console.log(`Uživatel ${this.name} si volá výtah do 2. patra.`);
    const waitingForElevatorMs = 2000; // Čekání na výtah 2 sekundy
    // Simulace čekání na výtah
    await new Promise((resolve) => setTimeout(resolve, waitingForElevatorMs));
    // Výtah přijíždí
    console.log(`Výtah přijel do vstupní haly.`);
    console.log(`Výtah dorazil, uživatel ${this.name} nastupuje.`);
    // Jízda výtahem 2 sekundy
    const elevatorRideMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, elevatorRideMs));
    console.log(`Uživatel ${this.name} vystupuje z výtahu ve druhém patře.`);
    return new SecondFloor(this.name);
  }
}
/*
Cvičení - Fluent API  ⌛8:00:
Přidej novou metodu washHands() do bathroom.ts
Metoda vypíše do konzole “Návštěvník Jméno si umyl/a ruce”
Metoda vrátí stávající objekt (this).
Přidej umytí rukou jako krok do visitor.ts
*/
