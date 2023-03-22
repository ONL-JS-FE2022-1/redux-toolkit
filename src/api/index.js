import axios from "axios";

export async function getUsers() {
    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users');
    return users;
}