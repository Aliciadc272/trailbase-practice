import React from "react";
import {List, Edit, Create, Editbutton, DeleteButton, Datagrid, SimpleForm, NumberField, NumberInput, TextField, TextInput, EmailField, DateField, DateInput } from 'react-admin';

export const profileList = () => (
    <List>
        <Datagrid>
            <NumberField source="User_ID" />
            <TextField source="Username" />
            <EmailField source="Email" />
            <TextField source="Role" />
            <DateField source="Created_At" />
            <Editbutton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const profileEdit = () => (
    <Edit title='Edit Profile'>
        <SimpleForm>
            <TextInput source="Username" />
            <TextInput source="Email" />
            <TextInput source="Role" />
            <DateInput source="Created_At" />
        </SimpleForm>
    </Edit>
);

export const profileCreate = () => (
    <Create title='Create Profile'>
        <SimpleForm>
            <TextInput source="Username" />
            <TextInput source="Email" />
            <TextInput source="Role" />
            <DateInput source="Created_At" />
        </SimpleForm>
    </Create>
);