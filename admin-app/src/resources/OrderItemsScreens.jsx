import { Select } from "@mui/material";
import React from "react";
import { List, Edit, Create, Datagrid, SimpleForm, ReferenceField, ReferenceInput, EditButton, DeleteButton, NumberField, NumberInput, TextField, SelectInput } from 'react-admin';

export const OrderItemsList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <NumberField source="quantity" />
            <NumberField source="price" />
            <ReferenceField source="orderId" reference="Orders">
                <NumberField source="id" />
            </ReferenceField>
            <ReferenceField source="productId" reference="products">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const OrderItemsEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="quantity" />
            <NumberInput source="price" />
            <ReferenceInput source="Orderid" reference="Orders">
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const OrderItemsCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="quantity" />
            <NumberInput source="price" />
            <ReferenceInput source="Orderid" reference="Orders">
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);