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
    this.handleSaveNewRow = this.handleSaveNewRow.bind(this);

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
    const newDictionary = this.state.dict;
    const item = ['', ''];
    newDictionary.push(item);
    this.setState({
      dict: newDictionary
    }, () => console.log(this.state))
  }

  handleRemoveRowAction(id) {
    var dictionary = this.state.dict;
    dictionary.splice(id, 1);
    this.setState({
      dict: dictionary
    });
  }

  reduceArrToObject(dictionary) {
    const result = dictionary.reduce(function(map, arr) {
      map[arr[0]] = arr[1];
      return map;
    }, {});
    return result;
  }

  sendNewDictionaryObject() {
    if ((this.state.title == null) && (this.state.id == null)) {
      this.setState({
        showAlert: true
      })
    } else {
      const newDictionary = new DictionaryModel(this.state);
      const reducedDict = this.reduceArrToObject(newDictionary.dict);
      newDictionary.dict = reducedDict;
      this.props.sendNewDictionary(newDictionary)
    }
  }

  handleSaveNewRow(domain, range, id) {
    const row = this.state.dict[id];
    row[0] = domain;
    row[1] = range;
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
          sendRowToRemoveId={this.handleRemoveRowAction}
          sendNewRow={this.handleSaveNewRow}/>
      )
    });
    const tableVisible = (dict.length >= 1) ? true : false;

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
        {tableVisible && (
          <thead>
            <tr>
              <th>Domain</th>
              <th>Range</th>
              <th>Actions</th>
            </tr>
          </thead>
        )}
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
        <div className='Dictionary-view-alert'>
          <Alert show={showAlert} variant='danger' onClose={handleHide}>
              <span>
                You cannot save dictionary without title and id!
              </span>
              <span className='Dictionary-view-alert-button' type='button' onClick={handleHide}>
                x
              </span>
            </Alert>
          </div>
      </div>
    )
  }
}
