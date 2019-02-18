import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export class DictionaryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionaries: this.props.dictionaries,
      activeDictionaryId: '',
    }
  }

  _showDictionary = (id) => {
    this.props.sendActiveDictionary(id);
    this.toggleActiveClass(this.state.activeDictionaryId);
    this.setState({
      activeDictionaryId: id
    }, () => console.log(this.state));
    this.toggleActiveClass(id);
  }

  addDictionary = () => {
    this.props.sendNewDictionaryInfo(true);
  }

  toggleActiveClass = (id) => {
    if (id !== '') {
      const active_id = 'list-' + id;
      const element = this.refs[active_id];
      element.classList.toggle('active');
    }
  }

  render() {
    const {dictionaries} = this.state;
    var dictionaries_values = dictionaries.map((dictionary)=> {
      const name = dictionary.title;
      const list_id = 'list-' + dictionary.id;

      return(
        <div ref={list_id} className='Dictionary-list-item' onClick={(event) => this._showDictionary(dictionary.id)}>
          {name}
        </div>
      )
    });

    return (
      <div>
        <div className='Dictionary-list'>
          {dictionaries_values}
        </div>
        <div>
          <Button primary='true' value='add' size='lg' block onClick={(event) => this.addDictionary()}>new dictionary</Button>
        </div>
      </div>
    )
  }
}

DictionaryList.propTypes = {
  dictionaries: PropTypes.array.isRequired,
};
