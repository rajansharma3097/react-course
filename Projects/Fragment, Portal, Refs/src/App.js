import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name, age, id: Math.random().toString()}];
    });
  }

  return (
    <>
      <AddUser onAddSave={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
