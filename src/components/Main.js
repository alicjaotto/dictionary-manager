import React, { Component } from 'react';
import {DictionaryList} from './DictionaryList';
import {DictionaryView} from './DictionaryView';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Main extends Component {
  state = {
    dictionaries: this.props.dictionaries,
    viewVisible: false,
    activeDictionaryId: '',
    activeDictionary: {}
  }

  getActiveDictionaryId = (value) => {
    this.setState({
      activeDictionaryId: value,
    });
    const activeDictionary = this.filterDictionaries();
    this.setState({
      activeDictionary: activeDictionary,
      viewVisible: true
    });
  }

  filterDictionaries = () => {
    const dictionaries = this.state.dictionaries;
    var activeDict = null;
    dictionaries.forEach((dictionary) => {
      if (dictionary.id === this.state.activeDictionaryId) {
        activeDict = dictionary;
      }
    });
    return activeDict;
  }

  render() {
    const {dictionaries} = this.state;
    var {viewVisible} = this.state;
    const {activeDictionary} = this.state;

    return (
      <Container>
        <Row>
          <Col md={4}>
            <DictionaryList dictionaries={dictionaries} sendActiveDictionary={this.getActiveDictionaryId}/>
          </Col>
          <Col md={8}>
            {viewVisible &&
              (<DictionaryView dictionaries={dictionaries}/>)
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
