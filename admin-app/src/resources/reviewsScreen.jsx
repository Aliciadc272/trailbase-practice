import React from 'react';
import {List, Edit, Create, Datagrid, SimpleForm, ReferenceField, ReferenceInput, SelectInput, NumberField, NumberInput, TextField, TextInput, DateField, DateInput, EditButton, DeleteButton } from 'react-admin';

export const reviewsList = () => (
    <List>
        <Datagrid>
            <NumberField source='Reviews_ID' />
            <ReferenceField source='User_ID' reference='profile'>
                <TextField source='Username' />
            </ReferenceField>
            <TextField source='Product' />
            <NumberField source='Rating' />
            <DateField source='Review_Date' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const reviewsEdit = () => (
    <Edit title='Edit Reviews'>
        <SimpleForm>
            <ReferenceInput source='User_ID' reference='profile'>
                <SelectInput optionText='Username' />
            </ReferenceInput>
            <TextInput source='Product' />
            <NumberInput source='Rating' />
            <DateInput source='Review_Date' />
        </SimpleForm>
    </Edit>
);

export const reviewsCreate = () => (
    <Create title='Create reviews'>
        <SimpleForm>
            <ReferenceInput source='User_ID' reference='profile'>
                <SelectInput optionText='Username' />
            </ReferenceInput>
            <TextInput source='Product' />
            <NumberInput source='Rating' />
            <DateInput source='Review_Date' />
        </SimpleForm>
    </Create>
);