import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export class DictionaryList extends Component {

  state = {
    dictionaries: this.props.dictionaries,
    activeDictionary: ''
  }

  _showDictionary = (id) => {
    this.setState({
      activeDictionary: id
    });
    this.props.sendActiveDictionary(id);
  }

	render() {
    const {dictionaries} = this.state;
    var dictionaries_values = dictionaries.map((dictionary)=> {
      const name = dictionary.title;
      const id = dictionary.id;

      return(
        <ListGroup.Item as='li' action onClick={(event) => this._showDictionary(dictionary.id)}>
          {name}
        </ListGroup.Item>
      )
    });

    return (
      <div>
        <ListGroup>
          {dictionaries_values}
        </ListGroup>
        <div>
          <Button primary='true' value='add' size='lg' block>new dictionary</Button>
        </div>
      </div>

    )
  }
}

DictionaryList.propTypes = {
  dictionaries: PropTypes.array.isRequired,
};
