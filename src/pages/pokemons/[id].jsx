import Image from 'next/image';
import Link from 'next/link';

const Pokemon = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.name}</h1>
      <h4> Pokemon number {data.id}</h4>
      <Image src={data.sprites.front_default} width={400} height={400} />
      <Link href="/">Back to home</Link>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await res.json();

  return { props: { data } };
};

export default Pokemon;
