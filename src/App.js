import store from './Store';
import React from 'react';
import TaskBar from './components/TaskBar';
import Splash from './pages/Splash';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import FAQ from './pages/FAQ';
import Recovery from './pages/Recovery';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
        </HashRouter>
      </>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.user
  };
}

export default connect(mapStateToProps)(App);
