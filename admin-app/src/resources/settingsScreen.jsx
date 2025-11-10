import React from "react";
import {List, Edit, Create, EditButton, DeleteButton, Datagrid, SimpleForm, NumberField, NumberInput, BooleanField, BooleanInput } from 'react-admin';

export const settingList = () => (
    <List>
        <Datagrid>
            <NumberField source="Setting_ID" />
            <NumberField source="Profile_ID" />
            <BooleanField source="Notifications_Email" />
            <BooleanField source="Notifications_Push" />
            <BooleanField source="Privacy_Public" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const settingEdit = () => (
    <Edit title='Edit settings'>
        <SimpleForm>
            <BooleanInput source="Notifications_Email" />
            <BooleanInput source="Notifications_Push" />
            <BooleanInput source="Privacy_Public" />
        </SimpleForm>
    </Edit>
);

export const settingCreate = () => (
    <Create title='Create settings'>
        <SimpleForm>
            <BooleanInput source="Notifications_Email" />
            <BooleanInput source="Notifications_Push" />
            <BooleanInput source="Privacy_Public" />
        </SimpleForm>
    </Create>
);