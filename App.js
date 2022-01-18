import React from 'react';
import { UserContextProvider } from './src/context/UserContext';
import StackNavigation from "./src/navigation/navigate";

const App = () => {
    return (
      <UserContextProvider>
          <StackNavigation/>
      </UserContextProvider>
  );
};

export default App;
