// ? asynchronní funkce pro získání dat uživatele po 2s
// ? Nyní nemusíme chápat, jak funguje, stačí vědět, že se jedná o asynchronní funkci
async function fetchUserData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Načtená data uživatele.");
    }, 10000);
    console.log("test");
  });
}

// ? Hlavní funkce, která zavolá asynchronní funkci fetchUserData
// ? klíčové slovo async nám umožní používat await u asynchronních funkcí
async function main() {
  console.log("Načítám data...");
  // ? Počkáme na načtení dat až po 2s pomocí klíčového slova await
  fetchUserData();
  console.log("Jsem log, kde se zobrazím?");
  //   console.log(data); // Po 2s: "Načtená data uživatele."
}

main();
