import { SimplePokemon } from "..";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export default function PokemonGrid({ pokemons }: Readonly<Props>) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}
