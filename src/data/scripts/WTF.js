import fs from "fs/promises";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species";

const typeMap = {
  normal: "Normal",
  fire: "Feuer",
  water: "Wasser",
  grass: "Pflanze",
  electric: "Elektro",
  ice: "Eis",
  fighting: "Kampf",
  poison: "Gift",
  ground: "Boden",
  flying: "Flug",
  psychic: "Psycho",
  bug: "Käfer",
  rock: "Gestein",
  ghost: "Geist",
  dragon: "Drache",
  dark: "Unlicht",
  steel: "Stahl",
  fairy: "Fee",
};

async function getGermanName(id) {
  const res = await fetch(`${SPECIES_URL}/${id}`);
  const data = await res.json();
  const german = data.names.find((n) => n.language.name === "de");
  return german ? german.name : data.name;
}

async function getEvolutionData(id) {
  try {
    const res = await fetch(`${SPECIES_URL}/${id}`);
    const species = await res.json();
    const evoRes = await fetch(species.evolution_chain.url);
    const evoData = await evoRes.json();

    const chain = evoData.chain;

    function findEvolution(node) {
      if (node.species.url.includes(`/${id}/`)) {
        if (node.evolves_to.length > 0) {
          return {
            next: node.evolves_to[0].species.name,
            level: node.evolves_to[0].evolution_details[0]?.min_level || null,
          };
        }
      }
      for (const evo of node.evolves_to) {
        const result = findEvolution(evo);
        if (result) return result;
      }
      return null;
    }

    const result = findEvolution(chain);
    return result || { next: null, level: null };
  } catch {
    return { next: null, level: null };
  }
}

async function main() {
  const list = [];

  for (let i = 1; i <= 151; i++) {
    console.log(`Lade Pokémon ${i}...`);

    const res = await fetch(`${BASE_URL}/${i}`);
    const data = await res.json();

    const name = await getGermanName(i);
    const evo = await getEvolutionData(i);

    list.push({
      name,
      id: i,
      typ: data.types.map((t) => typeMap[t.type.name]),
      HP: data.stats.find((s) => s.stat.name === "hp").base_stat,
      currentXp: 0,
      xpNeededForNextLevel: 100,
      nextEvolve: evo.next,
      neededLevelToEvolve: evo.level,
      linkToImg: data.sprites.front_default,
    });
  }

  const content = `export const pokemonList = ${JSON.stringify(list, null, 2)};`;

  await fs.writeFile("pokemonList_de_151.js", content, "utf-8");

  console.log("Fertig: pokemonList_de_151.js erstellt");
}

main();
