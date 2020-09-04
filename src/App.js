import React, { useState } from 'react';
import './App.css';
import { UserWindow } from './UserWindow/UserWindow';

const initialUsers = [
  {
    name: 'Joan & Camila',
    img: 'https://m.dw.com/image/50320152_101.jpg',
    talking: true,
    id: 0,
  },
  {
    name: 'Daniel',
    talking: true,
    id: 1,
  },
  {
    name: 'Esteban',
    video: '/zoom_0.mp4',
    id: 2,
  },
];

function App() {

  const [ users, setUsers ] = useState(initialUsers);

  const handleClick = () => {
    setUsers([
      ...users,
      {
        name: 'uno',
        id: Math.random() * 6165165156,
      }
    ]);
    console.log(users);
  }

  return (
    <div className="App">
      
      <input />
      <button onClick={handleClick}>
        agregar
      </button>

      {users.map((obj) => <UserWindow
        {...obj}
        key={obj.id} />)}
      
    </div>
  );
}

export default App;
