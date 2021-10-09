import { useData } from "hooks";

const Userloader = () => {
  const load = () => fetch("/users.json").then((res) => res.json());
  const { data: users, error, isLoading } = useData(load);

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
