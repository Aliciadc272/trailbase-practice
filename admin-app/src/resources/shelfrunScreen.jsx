import React from 'react';
import {List, Edit, Create, EditButton, DeleteButton, Datagrid, SimpleForm, ReferenceField, ReferenceInput, SelectInput, NumberField, NumberInput, TextField, TextInput, DateField, DateInput } from 'react-admin';

export const shelfrunList = () => (
    <List>
        <Datagrid>
            <NumberField source='ShelfRun_ID' />
            <ReferenceField source='User_ID' reference='profile'>
                <TextField source='Username' />
            </ReferenceField>
            <TextField source='Product' />
            <NumberField source='Quantity' />
            <DateField source='Run_Date' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const shelfrunEdit = () => (
    <Edit title='Edit Shelfrun'>
        <SimpleForm>
        <ReferenceInput source='User_ID' reference='profile'>
            <SelectInput optionText='Username' />
        </ReferenceInput>
        <TextInput source='Product' />
        <NumberInput source='Quantity' />
        <DateInput source='Run_Date' />
        </SimpleForm>
    </Edit>
);

export const shelfrunCreate = () => (
    <Create title='Create Shelfrun'>
        <SimpleForm>
        <ReferenceInput source='User_ID' reference='profile'>
            <SelectInput optionText='Username' />
        </ReferenceInput>
        <TextInput source='Product' />
        <NumberInput source='Quantity' />
        <DateInput source='Run_Date' />
        </SimpleForm>
    </Create>
);

