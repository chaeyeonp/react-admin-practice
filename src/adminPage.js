import * as React from "react";
import {fetchUtils, Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate} from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const httpClient = (url, options = {}) => {
    if (!options.headers) {

        options.headers = new Headers({ Accept: 'application/json' });

    }
    //추가 헤더 설정
    options.headers.set('Access-Control-Expose-Headers','X-Total-Count');

    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('http://localhost:4000/admin',httpClient);
export const adminPage = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create = {PostCreate} />
        <Resource name="users" list={UserList} />
    </Admin>
)

export default adminPage
