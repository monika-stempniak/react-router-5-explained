import {useParams} from "react-router-dom";

export default function User({users}) {
  const {id} = useParams();

  const selectedUser = users.find(user => user.id === Number(id));

  return (
    <>
    {selectedUser ?
      <>
        <h2>User: {id}</h2>
        <p>{selectedUser.email}</p>
      </>
      :
      <p> User not found</p>
    }
    </>
  )
}