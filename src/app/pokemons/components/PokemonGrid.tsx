import Image from "next/image";
import { SimplePokemon } from "..";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export default function PokemonGrid({ pokemons }: Props) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
        // <Image
        //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        //   width={100}
        //   height={100}
        //   key={pokemon.id}
        //   alt={pokemon.name}
        // />
      ))}
    </div>
  );
}
