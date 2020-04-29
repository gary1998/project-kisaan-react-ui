import React from 'react';
import TaskBar from './components/TaskBar';
import Splash from './pages/Splash';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import FAQ from './pages/FAQ';
import Recovery from './pages/Recovery';
import Configure from './pages/Configure';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <>
        <TaskBar />
        <HashRouter>
          <Route exact path="/" render={() => <Splash />}></Route>
          <Route path="/dashboard" render={() => <Dashboard/>}></Route>
          <Route path="/chat" render={() => <Chat/>}></Route>
          <Route path="/faq" render={() => <FAQ/>}></Route>
          <Route path="/recovery" render={() => <Recovery/>}></Route>
          <Route path="/configure" render={() => <Configure />}></Route>
        </HashRouter>
      </>
    );
  }
}

export default App;
