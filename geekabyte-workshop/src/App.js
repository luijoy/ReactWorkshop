import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tabbar from './movie-island/Tabbar';

class App extends Component {
  constructor (props) {
    super (props);
  }

  onTabSelected = () => {
    console.log ('hello');
  };

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WatchList</h1>
        </header>
        <p className="App-intro">Click on the Following Tabs</p>
        <Tabbar onTabSelected={this.onTabSelected} />
      </div>
    );
  }
}

export default App;
