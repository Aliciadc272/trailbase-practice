import React from "react";
import { Admin, Resource } from 'react-admin';
import  { dataProvider, authProvider } from './ra-trailbase';

import { UsersList, UsersEdit, UsersCreate } from "./resources/UsersScreens";
import { ProductsList, ProductsEdit, ProductsCreate } from "./resources/ProductsScreens";
import { CategoriesList, CategoriesEdit, CategoriesCreate } from "./resources/CategoriesScreens";

function App() {
  return (
    <Admin 
    dataProvider={dataProvider} 
    authProvider={authProvider}
    >
      <Resource name="Users"
      options={{ label: "User Management" }}
      list={UsersList}
      edit={UsersEdit}
      create={UsersCreate}
      />

      <Resource name="Products"
      options={{ label: "Product Management" }}
      list={ProductsList}
      edit={ProductsEdit}
      create={ProductsCreate}
      />

      <Resource name="Categories"
      options={{ label: Category Management }}
      list={CategoriesList}
      edit={CategoriesEdit}
      create={CategoriesCreate}
      />
    </Admin>
  );
}
export default App;

