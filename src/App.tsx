import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './User';
import { userContext } from './Context';

function App() {

  const userObj = {
    name: "William",
    surname: "Mabotja",
    country: "South Africa"
  }
  
  return (
    <>
      <userContext.Provider value={userObj}>
          <User />
      </userContext.Provider>
    </>
  );
}

export default App;
