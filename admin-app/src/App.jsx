import React from "react";
import { Admin, Resource } from 'react-admin';
import  { dataProvider, authProvider } from './ra-trailbase';

import { UsersList, UsersEdit, UsersCreate } from "./resources/UsersScreens";
import { ProductsList, ProductsEdit, ProductsCreate } from "./resources/ProductsScreens";
import { CategoriesList, CategoriesEdit, CategoriesCreate } from "./resources/CategoriesScreens";
import { OrderList, OrdersCreate, OrdersEdit } from "./resources/OrdersScreens";
import { OrderItemsCreate, OrderItemsEdit, OrderItemsList } from "./resources/OrderItemsScreens";

function App() {
  return (
    <Admin title="Trailbase v React System"
    dataProvider={dataProvider} 
    authProvider={authProvider}
    dashboard={dashboard}
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
      options={{ label: "Category Management" }}
      list={CategoriesList}
      edit={CategoriesEdit}
      create={CategoriesCreate}
      />

      <Resource name="Orders"
      options={{ label: "Order Management" }}
      list={OrderList}
      edit={OrdersEdit}
      create={OrdersCreate}
      />

      <Resource name="OrderItems"
      options={{ label: "Order Items Management" }}
      list={OrderItemsList}
      edit={OrderItemsEdit}
      create={OrderItemsCreate}
      />
    </Admin>
  );
}
export default App;

