import './App.css';
import {Switch, Route} from 'react-router-dom'
import CounterPage from 'pages/CounterPage';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import UserPage from 'pages/UsersPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/counter" component={CounterPage} />
      <Route exact path="/users" component={UserPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
