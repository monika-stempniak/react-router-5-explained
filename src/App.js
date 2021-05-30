
import {useState} from "react";
import {NavLink, BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./containers/Home";
import Users from "./containers/Users";
import About from "./containers/About";
import NotFound from "./containers/NotFound";
import './App.css';


function Navigation({loggedIn}) {
  return (
    <ul>
      <li>
        <NavLink exact to="/" activeStyle={{color: "red"}}>Home</NavLink>
      </li>
      {
        loggedIn && (
          <li>
            <NavLink exact to="/users" activeStyle={{color: "red"}}>Users</NavLink>
          </li>
        )
      }
      <li>
        <NavLink exact  to="/about" activeStyle={{color: "red"}}>About</NavLink>
      </li>
    </ul>
  )
}

function PrivateRoute({component: Component, loggedIn, ...rest}) {
  return (
    <Route {...rest}>
      {
        loggedIn ? <Component /> : <Redirect to="/" />
      }
    </Route>
  )
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const authenticate = () => setLoggedIn(!loggedIn);

  return (
    <Router>
      <div className="app">
        <button onClick={authenticate}>
          {loggedIn ? "Sign out" : "Sign in"}
        </button>
        <Navigation loggedIn={loggedIn}/>
        <hr/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute path="/users" component={Users} loggedIn={loggedIn}/>
          <Route path='/about'>
            <About />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
