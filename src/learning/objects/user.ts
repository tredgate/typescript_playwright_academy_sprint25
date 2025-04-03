export class User {
  public username: string; // ? Property username je možné s anotací viditelnosti použít odkudkoliv, je to ale zbytečné, protože výchozí viditelnost je právě public (když ji nezadám)
  password: string;
  age: number;
  isActive = true;
  email: string;
  readonly role = "user"; // ? Readonly property musíme nastavit buď přímo nebo v constructoru

  constructor(username: string, password: string, age: number, email: string) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.age = age;
    console.log(
      `Vytvořen uživatel: ${this.username} ve věku ${this.age}, aktivován: ${this.isActive}`
    );
  }

  getUsername(): string {
    return this.username;
  }

  logUser(): void {
    console.log(
      `Uživatel: ${this.username} ve věku ${this.age}, aktivován: ${this.isActive}`
    );
  }

  setAge(newAge: number): void {
    console.log(
      `Změna věku uživatele ${this.username} z ${this.age} na ${newAge}`
    );
    this.age = newAge;
  }

  getEmail(): string {
    return this.email;
  }

  // ! Toto nebude fungovat, nemůžu měnit readonly property
  //   changeRole(newRole) {
  //     this.role = newRole;
  //   }

  private internalMethod() {
    console.log("Můžu být volaná jen uvnitř objektu");
  }
}
