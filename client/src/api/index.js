import axios from 'axios';

const url = 'http://localhost:5000/users';

export const fetchUsers = () => axios.get(url);
export const postUser = (newUser) => axios.post(url, newUser);
