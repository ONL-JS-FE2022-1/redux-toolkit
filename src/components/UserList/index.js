import React, {useState} from 'react';
import { SpinnerCircular } from 'spinners-react';

const UserList = () => {
    const [users] = useState([]);
    const [isLoading] = useState(false);
    const [error] = useState(null);

    return (
        <section>
            {isLoading && <SpinnerCircular size="30%" />}
            {error && <div>Error!!!!!</div>}
            {users.length > 0 &&
            users.map((u)=> <article key={u.id}>{JSON.stringify(u)}</article>)
            }
        </section>
    );
}

export default UserList;
