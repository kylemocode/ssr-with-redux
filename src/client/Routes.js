import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UserListPage';

export default [
	{
		...HomePage,
		path: '/',
		exact: true
	},
	{
		...UsersListPage,
		path: '/users',
	}
];