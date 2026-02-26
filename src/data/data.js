import axios from "axios";

async function getFirst151Pokemon() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
    );

    const names = response.data.results.map((pokemon) => pokemon.name);
    console.log(names);
  } catch (error) {
    console.error("Fehler beim Laden:", error.message);
  }
}

getFirst151Pokemon();
