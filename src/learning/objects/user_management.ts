import { User } from "./user.ts";

// ? Vytvoření instance třídy (objektu) User s názvem (const) adminUser
const adminUser = new User("admin", "admin", 55, "petr@seznam.cz");

console.log(adminUser.getUsername());
adminUser.logUser();
adminUser.setAge(28);
adminUser.logUser();
console.log(adminUser.getEmail());
// ? nemůžeme volat private metodu mimo class
// adminUser.internalMethod();
/*

Cvičení - práce s TS objekty(⌛5:00)
Přidej do User třídy novou property email: string
Přidej metodu getEmail(), která vrátí email
Otestuj v users_management.ts, že metoda funguje (vypsání do konzole).

*/
