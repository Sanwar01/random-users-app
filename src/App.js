import React, {useEffect} from "react";
import axios from "axios";

import store from "./store/store";
import {addUsers} from "./actions/users";

import Header from "./components/Header";

import UsersList from "./components/UsersList";

import './css/styles.css';

function App() {

  useEffect(() => {
    axios.get('/users')
      .then(response => {
        console.log(response.data);
        store.dispatch(addUsers(response.data.results))
      })
  })

  return (
    <>
      <Header/>
      <UsersList/>
    </>
  );
}

export default App;
