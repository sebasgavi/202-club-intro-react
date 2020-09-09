import React from 'react';
import './App.css';
import { UserWindow } from './UserWindow/UserWindow';
import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: "https://club-react-intro.firebaseio.com",
  projectId: "club-react-intro",
  storageBucket: "club-react-intro.appspot.com",
  messagingSenderId: "204005349416",
  appId: "1:204005349416:web:c244752f0d195c33c37d1d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function App() {

  const [ users, setUsers ] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('users').add({
      name: event.target.nickname.value,
      img: event.target.img.value,
    });
    event.target.reset();
  }

  const handleDelete = (id) => {
    db.collection('users').doc(id).delete();
  }

  React.useEffect(() => {
    db.collection('users')
      .onSnapshot(function(querySnapshot) {
        var currentUsers = [];
        querySnapshot.forEach(function(doc) {
          currentUsers.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setUsers(currentUsers);
      });
  }, []);

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
