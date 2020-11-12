import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashBoard from './components/DashBoard';
import EmployeeInfo from './components/EmployeeInfo';

import history from './history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Redirect exact from="/info" to="/info/personal"/>
          <Route exact path="/info/:page" render={props => <EmployeeInfo {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
