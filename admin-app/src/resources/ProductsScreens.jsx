import React from "react";
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton, Edit, Create, TextInput, NumberInput, SimpleForm, ReferenceField, ReferenceInput, SelectInput } from 'react-admin';

export const ProductsList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <NumberField source="price" />
            <NumberField source="stock" />
            <TextField source="descripton" />
            <ReferenceField source="categoryId" reference="Categories">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ProductsEdit = () => (
    <Edit title="Edit Products">
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="price" />
            <NumberInput source="stock" />
            <TextInput source="description" />
            <ReferenceInput source="CategoryId" reference="Categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const ProductsCreate = () => (
    <Create title="Create Products">
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="price" />
            <NumberInput source="stock" />
            <TextInput source="description" />
            <ReferenceInput source="CategoryId" reference="Categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);