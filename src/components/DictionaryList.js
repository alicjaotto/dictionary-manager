import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class DictionaryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionaries: this.props.dictionaries,
      activeDictionaryId: null,
      newDictionary: this.props.newDictionary
    }
  }

  componentWillUpdate() {
    this.toggleActiveClass(this.state.activeDictionaryId);
  }

  showDictionary(id) {
    this.props.sendActiveDictionary(id);
    this.setState({
      activeDictionaryId: id
    }, () => console.log());
    this.toggleActiveClass(id);
  }

  toggleActiveClass(id) {
    const active_id = 'list-' + id;
    if (id !== null) {
      const element = this.refs[active_id];
      element.classList.toggle('active');
    } else if (this.state.newDictionary) {
      const element = this.refs[active_id];
      console.log(element);
      element.classList.remove('active');
    }
  }

  render() {
    const {dictionaries} = this.state;
    var dictionaries_values = dictionaries.map((dictionary, index)=> {
      const name = dictionary.title;
      const list_id = 'list-' + dictionary.id;
      const key = index;

      return(
        <button key={key}
          type='button'
          disabled={this.props.disabled}
          ref={list_id}
          className='Dictionary-list-item' onClick={(event) => this.showDictionary(dictionary.id)}>
          {name}
        </button>
      )
    });

    return (
      <div className='Dictionary-list'>
        {dictionaries_values}
      </div>
    )
  }
}

DictionaryList.propTypes = {
  dictionaries: PropTypes.array.isRequired,
  newDictionary: PropTypes.bool,
};
