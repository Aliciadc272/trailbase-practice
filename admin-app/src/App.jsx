import React from "react";
import {Admin, Resource } from 'react-admin';
import {dataProvider, authProvider } from './ra-trailbase';

// screens
import { profileList, profileEdit, profileCreate } from "./resources/profileScreens";
import { shelfrunList, shelfrunEdit, shelfrunCreate } from "./resources/shelfrunScreen";
import { settingList, settingEdit, settingCreate } from "./resources/settingsScreen";
import { ordersList, ordersEdit, ordersCreate } from "./resources/OrdersScreen";
import { reviewsList, reviewsEdit, reviewsCreate } from "./resources/reviewsScreen";

function App() {
  return (
    <Admin 
    dataProvider={dataProvider}
    authProvider={authProvider}>

      <Resource name="profile"
      options={{ label: "Profile Management "}}
      list={profileList}
      edit={profileEdit}
      create={profileCreate}
      />

      <Resource name="shelfrun"
      options={{ label: 'Manage Shelfruns' }}
      list={shelfrunList}
      edit={shelfrunEdit}
      create={shelfrunCreate}
      />

      <Resource name="settings"
      options={{ label: 'Setting Management' }}
      list={settingList}
      edit={settingEdit}
      create={settingCreate}
      />

      <Resource name="orders"
      options={{ label: "Manage orders" }}
      list={ordersList}
      edit={ordersEdit}
      create={ordersCreate}
      />

      <Resource name="reviews"
      options={{ label: 'Manage Reviews' }}
      list={reviewsList} 
      edit={reviewsEdit}
      create={reviewsCreate}
      />
    </Admin>
  );
}

export default App;

