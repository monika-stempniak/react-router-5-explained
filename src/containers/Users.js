import {useState, useEffect} from "react";
import {Link, Switch, Route, useRouteMatch} from "react-router-dom";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);
  const match = useRouteMatch();
  const {path, url} = match;


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  },[]);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`${url}/${user.id}`}>{user.id} - {user.name}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${path}/:id`}><User users={users}/></Route>
        <Route exact path={path} />
      </Switch>
    </>
  )
}