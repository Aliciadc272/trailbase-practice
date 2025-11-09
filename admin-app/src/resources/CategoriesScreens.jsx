import React from "react";
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton, Edit, Create, TextInput, NumberInput, SimpleForm } from 'react-admin';

export const CategoriesList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const CategoriesEdit = () => (
    <Edit title="Edit Product Categories">
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const CategoriesCreate = () => (
    <Create title="Create Product Categories">
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);
