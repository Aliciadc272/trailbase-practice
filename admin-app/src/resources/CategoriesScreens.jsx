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
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const CategoriesCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);
