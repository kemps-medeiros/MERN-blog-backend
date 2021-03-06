import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './main.scss';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
