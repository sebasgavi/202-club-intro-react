import React from 'react';
import './App.css';
import { UserWindow } from './UserWindow/UserWindow';

function App() {
  return (
    <div className="App">
      
      <UserWindow name="Daniel" />
      <UserWindow name="Joan" talking={true} />
      <UserWindow name="Esteban" />
      <UserWindow name="Leider" talking />
      <UserWindow name="Jhon" />
      <UserWindow name="Sebastián" />
    </div>
  );
}

export default App;
