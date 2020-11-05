import { useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import IssueList from './components/issueList/IssueList';
import IssueByNumber from "./components/issueByNumber/IssueByNumber"

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
        <li><Link to="/">Home</Link></li>
        { loggedIn && (
          <li><Link to="/issues">Issues</Link></li>
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
        <Route path="/issues" component={IssueList}/>
      
        
      
    </Switch>  
    </>
  );
}

export default App;
