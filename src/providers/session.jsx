import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import http from '@/utils/http';
import { SessionContext } from '@/utils/session-context';

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState();

  const clearSession = () => {
    setSession(null);
  };

  const sessionQuery = useQuery({
    queryKey: ['session'],
    queryFn: () =>
      http.get('session').then((data) => {
        setSession(data);
        return data;
      }),
    retry: false,
  });

  return (
    <SessionContext.Provider value={{ session, setSession, clearSession }}>
      {sessionQuery.isLoading ? <Spinner animation="border" /> : children}
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.element,
};

export default SessionProvider;
