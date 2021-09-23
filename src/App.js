import { ApolloProvider } from '@apollo/client';
import client from './config/graphql';
import Content from './components/Content';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Content />
      </div>
    </ApolloProvider>
  );
};

export default App;
