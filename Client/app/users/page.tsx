import React from 'react'

// typscript for what we can get from fetching users
interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {

  // fetch data and cache it
  // will reload every 10000ms
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users', 
    {next: {revalidate: 10000}}
  );
  const userData: User[] = await response.json();

  return (
    <>
      <h1>USERS</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {userData.map(val => <h4 key={val.id}>{val.name}</h4>)}
      <img src="food.jpg" alt="" />
      <img src="food1.jpg" alt="" />
      <img src="food2.jpg" alt="" />
    </>
  )
}

export default UsersPage