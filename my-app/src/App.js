import React, { Component } from 'react';
import logo from './logo.svg';
import logoPlatzi from './platzi.png';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {
  state={
    logo:logo,
    text:"Welcome to React",
  }
  onClick(){
  this.setState({
    logo:logoPlatzi,
    text:"Bienvenido a React",
  })
  }
  render() {
    return (
      <div className="App">
        
        <header
        className="App-header">
        <CSSTransitionGroup 
         transitionName="Change"
         transitionEnterTimeOut={1000}
         transitionLeaveTimeOut={1000}
         >
          <img 
            key={this.state.logo}
            src={this.state.logo} 
            className="App-logo" 
            alt="logo" 
          />
          <h1 className="App-title">{this.state.text}</h1>
        </CSSTransitionGroup>  
          
          <button onClick={this.onClick.bind(this)}>Presiona</button>
        </header>
        <p className="App-intro">
          Practice React Transitions
        </p>
        <img
        src={logoPlatzi}
        />
      </div>
    );
  }
}

export default App;
