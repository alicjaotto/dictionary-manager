import React, { Component } from 'react';
import {DictionaryList} from './DictionaryList';
import {DictionaryView} from './DictionaryView';
import {NewDictionary} from './NewDictionary';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.addDictionary = this.addDictionary.bind(this);
    this.setActiveDictionary = this.setActiveDictionary.bind(this);

    this.state = {
      dictionaries: this.props.dictionaries,
      viewVisible: false,
      activeDictionaryId: null,
      newDictionary: false,
      activeDictionary: []
    };
  }

  setActiveDictionary(id) {
    const activeDictionary = this.findActiveDictionary(id);
    this.setState({
      activeDictionaryId: id,
      activeDictionary: activeDictionary,
      viewVisible: true
    }, () => console.log(this.state));
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
    )
  }
}

Main.propTypes = {
  dictionaries: PropTypes.array.isRequired,
};
