import axios from "axios";
import fs from "fs/promises";

async function getFirst151Pokemon() {
  try {
    // 1. Liste holen
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
    );

    const pokemonList = response.data.results;

    // 2. Für jedes Pokemon Details laden
    for (const pokemon of pokemonList) {
      const detailResponse = await axios.get(pokemon.url);
      const fullData = detailResponse.data;

      // 3. Datei speichern
      await fs.writeFile(
        `./pokemon/${fullData.name}.json`,
        JSON.stringify(fullData, null, 2),
      );

      console.log(`${fullData.name} gespeichert`);
    }

    console.log("Alle 151 Pokémon gespeichert.");
  } catch (error) {
    console.error("Fehler beim Laden:", error.message);
  }
}

getFirst151Pokemon();
