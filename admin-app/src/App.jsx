import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import { dataProvider, authProvider } from "./ra-trailbase"

function App() {
  return (
   <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="posts" list={ListGuesser} />
   </Admin>
  );
}

export default App;
