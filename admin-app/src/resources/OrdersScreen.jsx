import React from 'react';
import {List, Edit, Create, Datagrid, SimpleForm, ReferenceField, ReferenceInput, SelectInput, NumberField, NumberInput, TextField, TextInput, DateField, DateInput } from 'react-admin';

export const ordersList = () => (
    <List>
        <Datagrid>
            <NumberField source='Order_ID' />
            <ReferenceField source='User_ID' reference='profile'>
                <TextField source='Username' />
            </ReferenceField>
            <TextField source='Product' />
            <NumberField source='Quantity' />
            <DateField source='Order_Date' />
            <NumberField source='Price' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ordersEdit = () => (
    <Edit title='Edit orders'>
        <SimpleForm>
            <ReferenceInput source='User_ID' reference='profile'>
                <SelectInput optionText='Username' />
            </ReferenceInput>
            <TextInput source='Product' />
            <NumberInput source='Quantity' />
            <DateInput source='Order_Date' />
            <NumberInput source='Price' />
        </SimpleForm>
    </Edit>
);

export const ordersCreate = () => (
    <Create title='Create orders'>
        <SimpleForm>
            <ReferenceInput source='User_ID' reference='profile'>
                <SelectInput optionText='Username' />
            </ReferenceInput>
            <TextInput source='Product' />
            <NumberInput source='Quantity' />
            <DateInput source='Order_Date' />
            <NumberInput source='Price' />
        </SimpleForm>
    </Create>
);

