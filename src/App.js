import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import IssueList from './components/issueList/IssueList';
import IssueByNumber from "./components/issueByNumber/IssueByNumber"
import Users from './components/users/Users';
import UserInfoById from './components/UserInfoById/UserInfoById';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) {
      history.push('/');
    }
  }, [loggedIn, history]);
  

  return (
    <>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/users">User Search</NavLink></li>
        { loggedIn && (
          <li><NavLink to="/issues">Issues</NavLink></li>
        )}
        { loggedIn
          ? (<li><button onClick={() => {setLoggedIn(false)}}>Log Out</button></li>)
          : (<li><button onClick={() => {setLoggedIn(true)}}>Log In</button></li>)
        }
      </ul>
    <Switch>
      
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/issues/:number" component={IssueByNumber} />
        <Route path="/issues" exact component={IssueList}/>
        <Route path="/users/:login" component={UserInfoById} />
        <Route path="/users" exact component={Users} />
        
      
        
      
    </Switch>  
    </>
  );
}

export default App;
