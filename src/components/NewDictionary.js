import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SingleRow} from './SingleRow';
import { Table, Button, ButtonToolbar, Form, Col, Row } from 'react-bootstrap';

export class NewDictionary extends Component {
  constructor(props) {
    super(props);

    this.handleAddRowAction = this.handleAddRowAction.bind(this);
    this.handleRemoveRowAction = this.handleRemoveRowAction.bind(this);
    this.handleChangeAction = this.handleChangeAction.bind(this);
    this.sendNewDictionaryObject = this.sendNewDictionaryObject.bind(this);
    this.createNewDictionaryObject = this.createNewDictionaryObject.bind(this);

    this.state = {
      title: '',
      id: '',
      dict: []
    }
  }

  handleChangeAction(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.setState({
      [fieldName] : fieldValue
    })
  }

  handleAddRowAction(event) {
    const newRow = ['', ''];
    const newDictionary = this.state.dict;
    newDictionary.push(newRow);
    this.setState({
      dict: newDictionary
    })
  }

  handleRemoveRowAction(id) {
    var dictionary = this.state.dict;
    dictionary.splice(id, 1);
    this.setState({
      dict: dictionary
    });
  }

  createNewDictionaryObject(state) {
    const properties = ['id', 'title', 'dict'];
    var newDictionary = {};
    properties.forEach(function(property) {
      Object.defineProperty(newDictionary, property, {
          value: state[property],
          configurable: true
      });
    });
    return newDictionary;
  }

  sendNewDictionaryObject() {
    const newDictionary = this.createNewDictionaryObject(this.state);
    console.log(newDictionary);
  }

  render() {
    const {dict, title, id} = this.state;
    var rows = dict.map((item, index) => {
      const domain = item[0];
      const range = item[1];
      const key = index;
      return(
        <SingleRow
          key={key}
          id={key}
          domain={domain}
          range={range}
          sendRowToRemoveId={this.handleRemoveRowAction}/>
      )
    });

    return (
      <div className='Dictionary-view'>
      <Form.Group as={Row}>
        <Form.Label column sm='2'>Title</Form.Label>
        <Col sm='10'>
          <Form.Control name='title'
            onChange={this.handleChangeAction}
            type='text'
            size='sm'
            defaultValue={title}>
          </Form.Control>
        </Col>
        <Form.Label column sm='2'>Unique ID</Form.Label>
        <Col sm='10'>
          <Form.Control name='id'
            onChange={this.handleChangeAction}
            type='text'
            size='sm'
            defaultValue={id}>
          </Form.Control>
        </Col>
      </Form.Group>
      <Table striped bordered size='sm'>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Range</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button
            value='addRow'
            variant='primary'
            onClick={this.handleAddRowAction}>
            Add row
          </Button>
          <Button
            onClick={this.sendNewDictionaryObject}
            value='save'
            variant='primary'>
            Save dictionary
          </Button>
        </ButtonToolbar>
      </div>
    )
  }
}

NewDictionary.propTypes = {
  // activeDictionary: PropTypes.array,
  // newDictionary: PropTypes.bool
};
