import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import { getUsers } from 'store/slices/usersSlice';

const UserList = () => {
    const {users, isLoading, error} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers('Hello there'));
    }, [])

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
