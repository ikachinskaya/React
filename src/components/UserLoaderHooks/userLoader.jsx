import { useData } from "hooks";
import { getUsers } from "api";

const Userloader = () => {
  const { data: users, error, isLoading } = useData(getUsers);

  if (isLoading) {
    return <div>ISLOADING...</div>;
  }
  if (error) {
    return <div>{error.massage}</div>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </li>
      ))}
    </ul>
  );
};

export default Userloader;
