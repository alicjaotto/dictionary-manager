import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SingleDict} from './SingleDict';

export class DictionaryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionaries: this.props.dictionaries,
      activeDictionaryId: this.props.activeDictionaryId
    }
  }

  onClickCallback = () => {
    console.log(this.state);
  }

	render() {
    const {activeDictionaryId} = this.state;
    const {dictionaries} = this.state;
    var dictionary_values = dictionaries.map((dictionary)=> {
      let id = dictionary.id;
      if (id === activeDictionaryId) {
        const dict = new Map(Object.entries(dictionary.dict));
        const dictio = Array.from(dict);
        return(
          <div onClick={this.onClickCallback}>
            <SingleDict dictionary={dictio}/>
          </div>
        )
      }
      return
    });

    return (
      <div>
        {dictionary_values}
      </div>
    )
  }
}

DictionaryView.propTypes = {
  dictionaries: PropTypes.array.isRequired,
  activeDictionaryId: PropTypes.number.isRequired
};
