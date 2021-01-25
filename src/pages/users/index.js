import { useState, useEffect } from "react";

import List from "@material-ui/core/List";

import UserCard from "../../components/UserCard";

const UsersPage = ({ data, ...props }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data && data.data) setUsers(data.data);
  }, [data]);

  return (
    <div>
      <List>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </List>
    </div>
  );
};



export async function getStaticProps(context) {
  const res = await fetch("https://reqres.in/api/users?page=1");
  const users = await res.json();
  
  return {
    props: { data: users },
  };
}
export default UsersPage;
