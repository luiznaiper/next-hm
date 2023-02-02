import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Pokemon = ({ data }) => {
  const router = useRouter();
  console.log(router);

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <h4> Pokemon number {data.id}</h4>
      <Image src={data.sprites.front_default} width={400} height={400} />
      <Link href="/">Back to home</Link>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await res.json();

  return { props: { data } };
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: '1' } }];
  return {
    paths,
    fallback: true,
  };
};

// export const getServerSideProps = async ({ params }) => {
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
//   const data = await res.json();

//   return { props: { data } };
// };

export default Pokemon;
