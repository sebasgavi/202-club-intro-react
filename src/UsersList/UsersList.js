import React from 'react';
import { Link } from 'react-router-dom';
import { UserWindow } from '../UserWindow/UserWindow';
import { fb } from '../utils/firebase';

export const UsersList = () => {

  const [ users, setUsers ] = React.useState([]);

  React.useEffect(() => {
    const cancel = fb.users.onSnapshot(function(querySnapshot) {
      var currentUsers = [];
      querySnapshot.forEach(function(doc) {
        currentUsers.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setUsers(currentUsers);
      console.log('nueva renderización');
    });

    return () => {
      console.log('cleanup');
      cancel();
    }
  }, []);

  const handleDelete = (id) => {
    fb.users.doc(id).delete();
  }

  return (<div>
    <Link to="/nuevo">Agregar nuevo</Link>
    {users.map((obj) => <UserWindow
      {...obj}
      onDelete={handleDelete}
      key={obj.id} />)}
  </div>);
}