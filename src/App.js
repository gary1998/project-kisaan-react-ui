import store from './Store';
import React from 'react';
import TaskBar from './components/TaskBar';
import Splash from './pages/Splash';
import './App.css';

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
        <Splash store={this.state.store}/>
      </>
    );
  }
}

export default App;
