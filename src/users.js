// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyUrlField from './MyUrlField';
export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="student"/>
            <TextField source = "mask"/>
            <TextField source = "count"/>
            <TextField source = "date"/>
        </Datagrid>
    </List>
);
