import Link from 'next/link';

export default function Pokemons({ pokemons }) {
  console.log({ pokemons });

  return (
    <div>
      <p>Credo</p>
      <ul>
        {pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </ul>
    </div>
  );
}

function Pokemon({ pokemon }) {
  const id = pokemon.url
    .split('/')
    .filter((x) => x)
    .pop();

  return (
    <>
      <li>
        <Link href={`./pokemons/${id}`}>{pokemon.name}</Link>
      </li>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  return {
    props: { pokemons: data.results },
  };
};
