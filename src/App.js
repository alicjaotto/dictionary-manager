import React, { Component } from 'react';
import './App.css';
import {Main} from './components/Main';
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    const dictionaries = [
      {'id': 456, 'title': 'Winter palette', 'dict' : {'Stonegrey' : 'grey', 'Mystic Black': 'anthracite', 'Midnight Silver' : 'silver'}},
      {'id': 323, 'title': 'Autumn palette', 'dict': {'Light Brown': 'grey', 'Ocean Blue': 'blue', 'Moon beige' : 'beige'}},
      {'id': 723, 'title': 'Summer palette', 'dict': {'Happy Orange': 'orange', 'Cherry Red': 'red', 'Shiny yellow' : 'yellow'}}
    ];

    return (
      <div className='App'>
        <header className='App-header'>
          <Container>
            <h1 className='App-title'>dictionary manager</h1>
          </Container>
        </header>
        <Main dictionaries={dictionaries}/>
        <footer className='App-footer'>
          <Container>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
