import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SingleRow} from './SingleRow';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

export class DictionaryView extends Component {
  constructor(props) {
    super(props);

    this.handleAddRowAction = this.handleAddRowAction.bind(this);
    this.handleRemoveRowAction = this.handleRemoveRowAction.bind(this);
    this.handleSaveNewRow = this.handleSaveNewRow.bind(this);
    this.handleSaveChangesAction = this.handleSaveChangesAction.bind(this);

    this.state = {
      activeDictionary: this.props.activeDictionary,
      activeDictionaryId: this.props.activeDictionaryId
    }
  }

  handleAddRowAction(event) {
    const newRow = ['',''];
    const newDictionary = this.state.activeDictionary;
    newDictionary.push(newRow);
    this.setState({
      activeDictionary: newDictionary
    }, () => console.log(this.state));
  }

  handleRemoveRowAction(id) {
    var dictionary = this.state.activeDictionary;
    dictionary.splice(id, 1);
    this.setState({
      activeDictionary: dictionary
    });
  }

  handleSaveNewRow(domain, range, id) {
    const row = this.state.activeDictionary[id];
    row[0] = domain;
    row[1] = range;
  }

  handleSaveChangesAction() {
    var dict = this.state.activeDictionary;
    const result = dict.reduce(function(map, arr) {
      map[arr[0]] = arr[1];
      return map;
    }, {});
    this.props.sendChangedDictionary(result);
  }

  render() {
    var activeDictionary = this.props.activeDictionary;
    var rows = activeDictionary.map((item, index) => {
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
          sendRowData={this.handleRowData}
          sendNewRow={this.handleSaveNewRow}/>
      )
    });
    const tableVisible = (activeDictionary.length >= 1) ? true : false;

    return (
      <div className='Dictionary-view'>
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
            value='save'
            variant='primary'
            onClick={this.handleSaveChangesAction}>
            Save changes
          </Button>
        </ButtonToolbar>
      </div>
    )
  }
}

DictionaryView.propTypes = {
  activeDictionary: PropTypes.array,
  newDictionary: PropTypes.bool
};
