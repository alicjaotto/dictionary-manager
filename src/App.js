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
      viewVisible: true
    })
  }

  addDictionary(event) {
    this.setState({
      newDictionary: true,
      activeDictionaryId: null,
      activeDictionary: []
    }, () => console.log(this.state));
  }

  findActiveDictionary(id) {
    var activeDictionary = [];
    if (id !== null) {
      activeDictionary = Object.entries(this.state.dictionaries.find(x => x.id === id).dict);
    }
    return activeDictionary;
  }

  render() {
    const {dictionaries, viewVisible, newDictionary, activeDictionary, activeDictionaryId} = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <Container>
            <h1 className='App-title'>dictionary manager</h1>
          </Container>
        </header>
        <Container>
          <Row>
            <Col md={4}>
              <DictionaryList
                disabled={newDictionary}
                dictionaries={dictionaries}
                sendActiveDictionary={this.setActiveDictionary}
                newDictionary = {newDictionary}/>
              <div>
                <Button
                  disabled={newDictionary}
                  primary='true'
                  value='add'
                  size='lg'
                  block
                  onClick={this.addDictionary}>
                  new dictionary
                </Button>
              </div>
            </Col>
            <Col md={8}>
              {viewVisible && !newDictionary &&
                (<DictionaryView
                    key={activeDictionaryId}
                    activeDictionary={activeDictionary}
                    newDictionary={newDictionary}/>
                )
              }
              {newDictionary &&
                (<NewDictionary/>)
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
