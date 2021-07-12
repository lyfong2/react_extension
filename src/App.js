import React, {Component} from 'react';
// import Demo from './components/1_setState/index';
// import Demo from './components/2_lazyLoad/index';
import Demo from './components/3_hooks';

export default class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Demo/>
        </header>
      </div>
    );
  }
}
