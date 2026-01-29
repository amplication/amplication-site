import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return null;
};

export default NotFoundPage;
