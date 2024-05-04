import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const getHash = (): string =>
   typeof window !== 'undefined' ? window.location.hash : '';

export default function useHash() {
   const [hash, setHash] = useState('');
   const params = useParams();

   useEffect(() => {
      let isMounted = true;

      const awaitLoad = async () => {
         if (isMounted) {
            setHash(getHash());
         }
      };

      awaitLoad();

      return () => {
         isMounted = false;
      };
   }, [params]);

   return hash;
}
