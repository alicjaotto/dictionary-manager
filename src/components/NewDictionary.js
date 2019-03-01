import React, { Component } from 'react';
import {SingleRow} from './SingleRow';
import {DictionaryModel} from '../models/DictionaryModel';
import { Table, Button, ButtonToolbar, Form, Col, Row, Alert } from 'react-bootstrap';

export class NewDictionary extends Component {
  constructor(props) {
    super(props);

    this.handleAddRowAction = this.handleAddRowAction.bind(this);
    this.handleRemoveRowAction = this.handleRemoveRowAction.bind(this);
    this.handleChangeAction = this.handleChangeAction.bind(this);
    this.sendNewDictionaryObject = this.sendNewDictionaryObject.bind(this);
    this.createNewDictionaryObject = this.createNewDictionaryObject.bind(this);

    this.state = {
      title: null,
      id: null,
      dict: [],
      showAlert: false
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

  // createNewDictionaryObject(state) {
    // const properties = ['id', 'title', 'dict'];
    // var newDictionary = {};
    // properties.forEach(function(property) {
    //   Object.defineProperty(newDictionary, property, {
    //       value: state[property],
    //       configurable: true
    //   });
    // });
    // const newDictionary = new DictionaryModel;
    // return newDictionary;
  // }

  sendNewDictionaryObject() {
    if ((this.state.title == null) && (this.state.id == null)) {
      this.setState({
        showAlert: true
      })
    } else {
      const newDictionary = new DictionaryModel;
      console.log(newDictionary);
    }
  }

  render() {
    const handleHide = () => this.setState({ showAlert: false });
    const {dict, title, id, showAlert} = this.state;
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
            variant='secondary'
            onClick={this.handleAddRowAction}>
            Add row
          </Button>
          <Button
            onClick={this.sendNewDictionaryObject}
            value='save'
            variant='primary'>
            Save dictionary
          </Button>
          <Button
            onClick={this.sendNewDictionaryObject}
            value='dismiss'
            variant='danger'>
            Dismiss
          </Button>
        </ButtonToolbar>
        <Alert show={showAlert} variant="danger">
            <p>
              You cannot save dictionary without title and id!
            </p>
            <div className="d-flex justify-content-end">
              <Button onClick={handleHide} variant="outline-danger">
                X
              </Button>
            </div>
          </Alert>
      </div>
    )
  }
}
