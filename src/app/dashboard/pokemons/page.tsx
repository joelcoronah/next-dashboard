import { PokemonsResponse, SimplePokemon } from "../../../pokemons";
import PokemonGrid from "../../../pokemons/components/PokemonGrid";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.url.split("/").at(-2) ?? "",
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(150);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>static</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
