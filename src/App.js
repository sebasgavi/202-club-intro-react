import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { NewUserInput } from './NewUserInput/NewUserInput';
import { UsersList } from './UsersList/UsersList';

function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <Route path="/" exact component={UsersList} />
        <Route path="/nuevo" component={NewUserInput} />

      </BrowserRouter>

    </div>
  );
}

export default App;
