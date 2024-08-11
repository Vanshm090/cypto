// src/components/UserList.jsx
import React from 'react';
import { useQuery } from 'react-query';
import axiosInstance from '../api/axiosInstance';

const fetchUsers = async () => {
  const { data } = await axiosInstance.get('/users'); // Replace '/users' with your endpoint
  return data;
};

const UserList = () => {
  const { data, error, isLoading, isError } = useQuery('users', fetchUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
