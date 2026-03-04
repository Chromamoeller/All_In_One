import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pokemonFolder = path.join(__dirname, "../pokemon");
const outputFile = path.join(__dirname, "../pokemonList.js");

const files = fs.readdirSync(pokemonFolder).filter((f) => f.endsWith(".json"));

const pokemonList = files.map((file) => {
  const filePath = path.join(pokemonFolder, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    name: data.name,
    image: data.sprites.front_default,
  };
});

const content = `const pokemonList = ${JSON.stringify(pokemonList, null, 2)};

export default pokemonList;
`;

fs.writeFileSync(outputFile, content);

console.log("pokemonList.js wurde erstellt.");
