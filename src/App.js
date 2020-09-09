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

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([
      ...users,
      {
        name: event.target.nickname.value,
        img: event.target.img.value,
        id: Math.floor(Math.random() * 6165165156),
      }
    ]);
    event.target.reset();
  }

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsers);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="nickname" placeholder="Nombre" />
        <input name="img" placeholder="URL de imagen" />
        <button type="submit">
          agregar
        </button>
      </form>

      {users.map((obj) => <UserWindow
        {...obj}
        onDelete={handleDelete}
        key={obj.id} />)}

    </div>
  );
}

export default App;
