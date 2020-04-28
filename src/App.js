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

class App extends React.Component {
  state = {
    store: {}
  };

  constructor(props){
    super(props);
    store.subscribe(() => {
      this.setState({store: store.getState()})
    });
  }

  render(){
    return (
      <>
        <TaskBar store={this.state.store}/>
        <HashRouter>
          <Route exact path="/" render={() => <Splash store={this.state.store}/>}></Route>
          <Route path="/dashboard" render={() => <Dashboard/>}></Route>
          <Route path="/chat" render={() => <Chat/>}></Route>
          <Route path="/faq" render={() => <FAQ/>}></Route>
          <Route path="/recovery" render={() => <Recovery/>}></Route>
        </HashRouter>
      </>
    );
  }
}

export default App;
