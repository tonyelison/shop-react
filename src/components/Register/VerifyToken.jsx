import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spinner from 'react-bootstrap/Spinner';
import http from '@/utils/http';

const VerifyToken = () => {
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');

  const verifyQuery = useQuery({
    queryKey: ['verification'],
    queryFn: async () => http.post(`verification?token=${token}`),
  });

  return (
    <>
      {verifyQuery.isLoading ? (
        <Spinner animation="border" />
      ) : (
        <h1>
          {verifyQuery.isSuccess
            ? 'Your email has been verified!'
            : 'We were unable to verify your email'}
        </h1>
      )}
    </>
  );
};

export default VerifyToken;
