// import { Bathroom } from "./bathroom.ts";
import { EntryHall } from "./entry_hall.ts";

// ? Fluent zápis
new EntryHall("Jan Novák")
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Čau, jak je?")
  .askReceptionistQuestion("Ty se se mnou nebavíš?")
  .entryBathroom()
  .washHands();

// ? Standardní objektový zápis
// const name = "Druhák";
// const entryHall = new EntryHall(name);
// entryHall.entryBathroom();
// const bathroom = new Bathroom(name);
// bathroom.returnToEntryHall();
// entryHall.entryBathroom();
// bathroom.returnToEntryHall();

// ? Zabalení awaitu do async funkce, abychom se vyhnuli chybě: ERROR: Top-level await is currently not supported with the "cjs" output format
async function main() {
  const marie = new EntryHall("Marie Dlouhá"); // ? V rámci asynchronního chování, musím vždy objekt ukládat do proměnné. Nemůžu totiž volat await new EntryHall (constructor to nepodporuje, dostali bychom chybu)
  await marie
    .takeElevatorToSecondFloor()
    .then((secondFloor) => secondFloor.lookAround(5))
    .then((secondFloor) => secondFloor.returnToEntryHallByElevator());
}

main(); // ! provoláváme async funkci, nesmíme použít await (protože TS v této verzi await mimo funkce nepodporuje)
