import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HotelList  from './components/HotelList';
import HotelDetails from './components/HotelDetail';
import { Route, Switch } from 'wouter';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={HotelList} />
        <Route path="/hotel/:id" component={HotelDetails} />
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
