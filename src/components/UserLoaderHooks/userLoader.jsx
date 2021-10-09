import React, { useState, useEffect } from "react";

const Userloader = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>ISLOADING...</div>;
  }
  if (error) {
    return <div>{error.massage}</div>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Userloader;
