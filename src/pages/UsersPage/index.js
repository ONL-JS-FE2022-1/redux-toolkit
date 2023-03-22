import Header from 'components/Header';
import UserList from 'components/UserList';
import React from 'react';

const UserPage = () => {
    return (
        <>
            <Header />
            <h1>Our clients</h1>
            <UserList />
        </>
    );
}

export default UserPage;
