import React, { useEffect, useState } from "react";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl) // api'ye bağlan
      .then((res) => res.json()) // response'u json a çevir
      .then((data) => setUsers(data)) // çevrilen datayı users dizisine at
      .catch((error) => console.log(error)) // hata yakalama
      .finally(() => setIsLoading(false)); // veriler geldiğinde isLoading'i false yap
  }, [users]);

  return (
    <div>
      <h1>Users</h1>

      {isLoading && <div>Loading...</div>}

      {users.map((user, index) => (
        <div key={index}>{user.username}</div>
      ))}
    </div>
  );
}

export default Users;
