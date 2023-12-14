import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SessionProvider from './providers/session';
import RouterProvider from './providers/router';

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <SessionProvider>
        <RouterProvider />
      </SessionProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
