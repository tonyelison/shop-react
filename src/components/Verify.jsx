import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spinner from 'react-bootstrap/Spinner';
import http from '@/utils/http';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const verifyQuery = useQuery({
    queryKey: ['verify'],
    queryFn: () => http.get(`verify?token=${token}`),
    retry: false,
  });
  return (
    <>
      {verifyQuery.isLoading ? (
        <Spinner animation="border" />
      ) : (
        'Your email has been verified!'
      )}
    </>
  );
};

export default Verify;
