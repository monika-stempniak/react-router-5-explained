import {useHistory} from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => history.goForward()}>Go forward</button>
    </>
  )
}