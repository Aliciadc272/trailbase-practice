import React from "react";
import { List, Datagrid, NumberField, DateField, TextField, ReferenceField, EditButton, DeleteButton, Edit, Create, TextInput, NumberInput, DateInput, ReferenceInput, SimpleForm, SelectInput } from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid>
        <NumberField source="id" />
        <DateField source="orderDate" />
        <TextField source="status" />
        <NumberField source="total" />
        <ReferenceField source="userId" reference="Users">
            <TextField source="name" />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
        </Datagrid>
    </List>
);

export const OrdersEdit = () => (
    <Edit title="Edit Orders">
        <SimpleForm>
            <DateInput source="orderDate" />
            <TextInput source="status" />
            <NumberInput source="total" />
            <ReferenceInput source="userId" reference="Users">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const OrdersCreate = () => (
    <Create title="Create Orders">
        <SimpleForm>
            <DateInput source="orderDate" />
            <TextInput source="status" />
            <NumberInput source="total" />
            <ReferenceInput source="userId" reference="Users">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

