import React from "react";
import {List, Datagrid, TextField, EmailField, NumberField, DateField, EditButton, DeleteButton, Edit, Create, TextInput, NumberInput, DateInput, SimpleForm } from 'react-admin';

export const UsersList = () => (
    <List>
    <Datagrid>
        <NumberField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="role" />
        <DateField source="createdAt" />
        <EditButton />
        <DeleteButton />
    </Datagrid>
    </List>
);

export const UsersEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="role" />
            <DateInput source="createdAt" />
        </SimpleForm>
    </Edit>
);

export const UsersCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="role" />
            <DateInput source="createdAt" />
        </SimpleForm>
    </Create>
);