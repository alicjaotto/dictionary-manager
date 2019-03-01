import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class DictionaryList extends Component {
    state = {
      activeDictionaryId: null,
      newDictionary: this.props.newDictionary
    }

  componentWillUpdate() {
    this.toggleActiveClass(this.state.activeDictionaryId);
  }

  showDictionary(id) {
    this.props.sendActiveDictionary(id);
    this.setState({
      activeDictionaryId: id
    })
    this.toggleActiveClass(id);
  }

  toggleActiveClass(id) {
    const active_id = 'list-' + id;
    if ((!this.state.newDictionary) && (id !== null)) {
      const element = this.refs[active_id];
      element.classList.toggle('active');
    } else if (this.state.newDictionary) {
      const element = this.refs[active_id];
      element.classList.remove('active');
    }
  }

  render() {
    const {dictionaries} = this.props;
    var dictionaries_values = dictionaries.map((dictionary, index)=> {
      const name = dictionary.title;
      const list_id = 'list-' + dictionary.id;

      return(
        <li key={list_id}>
          <button
            type='button'
            disabled={this.props.disabled}
            ref={list_id}
            className='Dictionary-list-item' onClick={(event) => this.showDictionary(dictionary.id)}>
            {name}
          </button>
        </li>
      )
    });

    return (
      <ul className='Dictionary-list'>
        {dictionaries_values}
      </ul>
    )
  }
}

DictionaryList.propTypes = {
  newDictionary: PropTypes.bool.isRequired
};
