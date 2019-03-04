import React, { Component } from 'react';
import './App.css';
import {DictionaryList} from './components/DictionaryList';
import {DictionaryView} from './components/DictionaryView';
import {NewDictionary} from './components/NewDictionary';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {DictionaryService} from './services/DictionaryService';

class App extends Component {
  state = {
    dictionaries: [],
    viewVisible: false,
    activeDictionaryId: null,
    newDictionary: false,
    activeDictionary: []
  }

  constructor(props) {
    super(props);

    this.addDictionary = this.addDictionary.bind(this);
    this.setActiveDictionary = this.setActiveDictionary.bind(this);
    this.saveNewDictionary = this.saveNewDictionary.bind(this);
    this.saveChangedDictionary = this.saveChangedDictionary.bind(this);
  }

  componentDidMount() {
    DictionaryService.getDictionaries().then(dictionaries => {
      this.setState({
        dictionaries: dictionaries
      }, () => console.log(this.state.dictionaries))
    })
  }

  setActiveDictionary(id) {
    const activeDictionary = this.findActiveDictionary(id);
    this.setState({
      activeDictionaryId: id,
      activeDictionary: activeDictionary,
      viewVisible: true,
      newDictionary: false
    }, () => console.log(this.state))
  }

  addDictionary(event) {
    this.setState({
      newDictionary: true,
      activeDictionaryId: null,
      activeDictionary: []
    });
  }

  findActiveDictionary(id) {
    var activeDictionary = [];
    if (id !== null) {
      activeDictionary = Object.entries(this.state.dictionaries.find(x => x.id === id).dict);
    }
    return activeDictionary;
  }

  saveNewDictionary(dictionary) {
    if (dictionary == null) {
      console.log('no value');
    } else {
      const newDictId = dictionary.id;
      const newDictionaries = this.state.dictionaries;
      newDictionaries.push(dictionary);
      this.setState({
        dictionaries: newDictionaries,
      }, () => console.log(this.state))
      this.setActiveDictionary(newDictId);
    }
  }

  saveChangedDictionary(dictionary) {
    var editedDictionary = this.state.dictionaries.find(x => x.id === this.state.activeDictionaryId);
    editedDictionary.dict = dictionary;
  }

  render() {
    const {dictionaries, viewVisible, newDictionary, activeDictionary, activeDictionaryId} = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <div className='App-title-wrapper'>
            <h1 className='App-title'>dictionary
              <span className='App-title-thiner'>manager</span>
            </h1>
            <span className='App-title-version'>v. 1.3.3</span>
          </div>
          <nav className='App-menu'>
            <ul className='App-menu-nav'>
              <li className='App-menu-nav-link'>about</li>
              <li className='App-menu-nav-link'>support</li>
              <li className='App-menu-nav-link'>log out</li>
            </ul>
          </nav>
        </header>
        <Container>
          <Row>
            <Col md={4}>
              <DictionaryList
                disabled={newDictionary}
                dictionaries={dictionaries}
                sendActiveDictionary={this.setActiveDictionary}
                newDictionary={newDictionary}
                activeDictionaryId={activeDictionaryId}/>
              <div>
                <Button
                  disabled={newDictionary}
                  primary='true'
                  value='add'
                  size='lg'
                  block
                  onClick={this.addDictionary}>
                  + new dictionary
                </Button>
              </div>
            </Col>
            <Col md={8}>
              {viewVisible && !newDictionary &&
                (<DictionaryView
                    key={activeDictionaryId}
                    activeDictionary={activeDictionary}
                    newDictionary={newDictionary}
                    sendChangedDictionary={this.saveChangedDictionary}/>
                )
              }
              {newDictionary &&
                (<NewDictionary sendNewDictionary={this.saveNewDictionary}/>)
              }
            </Col>
          </Row>
        </Container>
        <footer className='App-footer'>
          <Container>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
