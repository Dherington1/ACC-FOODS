'use client'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function ProfileFetch() {
  // const [userData, setUserData] = useState<>();

  useEffect(() => {
      const getUserData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/v1/users/getUserById', { withCredentials: true });
          if (response.status === 200) {
              console.log('response: ', response.data);
          } 
        } catch (error) {
          console.error('Error verifying user', error);
        }
      };
    
      getUserData();
  }, []);

  
  return (
      <>
          Hello world
      </>
  )
}

export default ProfileFetch