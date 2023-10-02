import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const getUserdata = async () => {
            try {
                const data = await fetch('/api/users');
                const jsonData = await data.json();
                setUserData(jsonData);
            } catch (error) {
                console.log("Error occured : ", error);
            }
        }

        getUserdata();
    }, []);

    console.log("This is my data : ", userData);
  return (
    <>
        <h1>This is API data</h1>
        {
            userData.length > 0 ? userData.map((user: any) => {
                return (
                    <>
                        <p key={user.id}>{user.name}</p>
                    </>
                )
            }) : <span>No data is there</span>
        }
    </>
  )
}

export default UserList;