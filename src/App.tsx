import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './assets/images/logo.png';
import './App.css';
import HomePage from './components/Homepage';
import store from './redux/store/store';
import Launches from './components/launches';
import NavBar from './components/NavBar';
import profile from './components/profile';

const App: React.FC = () => {
  return (
    <Provider store ={store}>
    <Router>
    <Switch>
    <div className="App">
      <NavBar/>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/launches' component={Launches}/>
      <Route exact path='/profile' component={profile}/>
    </div>
    </Switch>
    </Router>
    </Provider>
  );
}
export default App;
