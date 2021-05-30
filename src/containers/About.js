import {useHistory, useLocation} from "react-router-dom";

export default function About() {
  const history = useHistory();
  const location = useLocation();

  return (
    <>
      <h1>About</h1>
      <p>Location: {location.pathname}</p>
      <button onClick={() => history.goBack()}>Go back </button>
      <button onClick={() => history.push("/")}>Go to Home Page</button>
    </>
  )
}