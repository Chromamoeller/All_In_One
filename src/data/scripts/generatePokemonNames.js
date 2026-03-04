import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pokemonFolder = path.join(__dirname, "../pokemon");
const outputFile = path.join(__dirname, "../pokemonList.js");

/**
 * Erwartet ein PokeAPI-Pokemon-JSON (https://pokeapi.co/api/v2/pokemon/{id or name})
 * Hinweis zur "description":
 * In diesem JSON ist i. d. R. KEINE Beschreibung enthalten.
 * Dafür brauchst du zusätzlich /pokemon-species/{id} (flavor_text_entries).
 * Dieses Script setzt description daher auf null, falls nicht vorhanden.
 */
const files = fs.readdirSync(pokemonFolder).filter((f) => f.endsWith(".json"));

const pokemonList = files.map((file) => {
  const filePath = path.join(pokemonFolder, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const types = Array.isArray(data.types)
    ? data.types
        .slice()
        .sort((a, b) => (a.slot ?? 0) - (b.slot ?? 0))
        .map((t) => t?.type?.name)
        .filter(Boolean)
    : [];

  // Stats als Object: { hp, attack, defense, special-attack, special-defense, speed }
  const stats = Array.isArray(data.stats)
    ? Object.fromEntries(
        data.stats
          .map((s) => [s?.stat?.name, s?.base_stat])
          .filter(([k, v]) => typeof k === "string" && typeof v === "number"),
      )
    : {};

  return {
    id: data.id ?? null,
    name: data.name ?? null,
    types,
    description: data.description ?? null, // meist nicht vorhanden im pokemon-endpoint
    sprite: data?.sprites?.front_default ?? null,
    stats,
  };
});

const content = `const pokemonList = ${JSON.stringify(pokemonList, null, 2)};

export default pokemonList;
`;

fs.writeFileSync(outputFile, content);
console.log("pokemonList.js wurde erstellt.");
