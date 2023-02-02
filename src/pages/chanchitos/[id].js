import useIsMounted from '@/hooks/isMounted';
import { useRouter } from 'next/router';

const Dinamico = () => {
  const isMounted = useIsMounted();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }
  console.log({ router }, router.query.id);

  return <div>Dinamico</div>;
};

export default Dinamico;
