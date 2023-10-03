import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await data.json();
      setUser(result.splice(0, 10));
      setError(null);
    } catch (error: any) {
      setError(error);
      console.log("Occured Exception");
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users Data</h1>
      {error && <h1>{error}</h1>}
      <ul>
        {user.map((user: any) => {
          return (
            <>
              <li key={user.title}>{user.title}</li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
