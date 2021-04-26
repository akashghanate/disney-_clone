import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login"
import Header from './components/Header';
import config from './config';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path={config.baseURl+'/'}>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
