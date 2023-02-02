const { useRouter } = require('next/router');
const { useState, useEffect } = require('react');

const useIsMounted = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);
  return loaded;
};

export default useIsMounted;
