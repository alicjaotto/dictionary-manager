import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SingleRow} from './SingleRow';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

export class DictionaryView extends Component {
  constructor(props) {
    super(props);

    this.handleAddRowAction = this.handleAddRowAction.bind(this);
    this.handleRemoveRowAction = this.handleRemoveRowAction.bind(this);

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
    });
  }

  handleRemoveRowAction(id) {
    var dictionary = this.state.activeDictionary;
    dictionary.splice(id, 1);
    this.setState({
      activeDictionary: dictionary
    });
  }

  render() {
    var activeDictionary = this.props.activeDictionary;
    var {newDictionary} = this.props.newDictionary;
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
          sendRowData={this.handleRowData}/>
      )
    });

    return (
      <div className='Dictionary-view'>
        {!newDictionary &&
          (
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
          )
        }
        <ButtonToolbar>
          <Button
            value='addRow'
            variant='secondary'
            onClick={this.handleAddRowAction}>
            Add row
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
