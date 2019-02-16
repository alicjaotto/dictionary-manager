import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SingleDict} from './SingleDict';

export class DictionaryView extends Component {

  state = {
    dictionaries: this.props.dictionaries,
  }

	render() {
    const {dictionaries} = this.state;
    var dictionaries_values = dictionaries.map((dictionary)=> {
      const id = dictionary.id;
      let dict = new Map(Object.entries(dictionary.dict));
      const dictio = Array.from(dict);

      return(
        <SingleDict key={id} dictionary={dictio}/>
      )
    });

    return (
      <div>
        {dictionaries_values}
      </div>
    )
  }
}

DictionaryView.propTypes = {
  dictionaries: PropTypes.array.isRequired,
};
