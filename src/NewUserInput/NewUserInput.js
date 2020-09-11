import React from 'react';
import { useHistory } from 'react-router-dom';
import { fb } from '../utils/firebase';

export const NewUserInput = () => {

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    fb.users.add({
      name: event.target.nickname.value,
      img: event.target.img.value,
    })
    .catch(() => {
      alert('sorry');
    })
    .then(() => {
      history.push('/');
    });
  }

  return (<form onSubmit={handleSubmit}>
    <input name="nickname" placeholder="Nombre" />
    <input name="img" placeholder="URL de imagen" />
    <button type="submit">
      agregar
    </button>
  </form>);
}