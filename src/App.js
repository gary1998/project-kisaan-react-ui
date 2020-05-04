import React from 'react';
import AppLayout from './components/AppLayout';
import Splash from './pages/Splash';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import FAQ from './pages/FAQ';
import Recovery from './pages/Recovery';
import Configure from './pages/Configure';
import Content from './components/Content';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <>
        <AppLayout >
          <HashRouter>
            <Content>
              <Route exact path="/" render={() => <Splash />}></Route>
              <Route exact path="/home" render={() => <Splash />}></Route>
              <Route path="/dashboard" render={() => <Dashboard/>}></Route>
              <Route path="/chat" render={() => <Chat/>}></Route>
              <Route path="/faq" render={() => <FAQ/>}></Route>
              <Route path="/recovery" render={() => <Recovery/>}></Route>
              <Route path="/configure" render={() => <Configure />}></Route>
            </Content>
          </HashRouter>
        </AppLayout>
      </>
    );
  }
}

export default App;
