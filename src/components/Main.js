import React, { Component } from 'react';
import {DictionaryList} from './DictionaryList';
import {DictionaryView} from './DictionaryView';
import {SingleDict} from './SingleDict';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionaries: this.props.dictionaries,
      viewVisible: false,
      activeDictionaryId: '',
      newDictionary: false
    };
  }

  getActiveDictionaryId = (id) => {
    this.setState({
      activeDictionaryId: id,
      viewVisible: true
    }, () => console.log(this.state));
  }

  getNewDictionaryInfo = (value) => {
    this.setState({
      newDictionary: value,
      viewVisible: false
    }, () => console.log(this.state))
  }

  // addDictionary() {
  //   const properties = ['id', 'title', 'dict'];
  //   var newDictionary = {};
  //
  //   properties.forEach(function(property) {
  //     Object.defineProperty(newDictionary, property, {
  //       value: null,
  //       configurable: true
  //     })
  //   });
  // }

  render() {
    const {dictionaries} = this.state;
    var {viewVisible} = this.state;
    const {activeDictionaryId} = this.state;
    var {newDictionary} = this.state;

    return (
      <Container>
        <Row>
          <Col md={4}>
            <DictionaryList dictionaries={dictionaries} sendActiveDictionary={this.getActiveDictionaryId} sendNewDictionaryInfo={this.getNewDictionaryInfo}/>
          </Col>
          <Col md={8}>
            {viewVisible &&
              (<DictionaryView dictionaries={dictionaries} activeDictionaryId={activeDictionaryId}/>)
            }
            {newDictionary &&
              (<div>NEW DICTIONARY</div>)
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
