import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { Profile } from './components/profile/profile';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
