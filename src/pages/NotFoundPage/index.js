import Header from 'components/Header';
import React from 'react';

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <h1>Page not found</h1>
            <img src="not_found.png" alt='Page not found' />
        </>
    );
}

export default NotFoundPage;
