import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SingleRow} from './SingleRow';

export class SingleDict extends Component {

	state = {
		dictionary: this.props.dictionary,
	}

  render() {
    const {dictionary} = this.state;
    var rows = dictionary.map((item) => {
      const domain = item[0];
      const range = item[1];
      return(
        <SingleRow domain={domain} range={range}/>
      )
    });

    return (
      <table>
        <tbody>
          <tr>
            <th>Domain</th>
            <th>Range</th>
          </tr>
          {rows}
        </tbody>
      </table>
    )
  };
}

SingleDict.propTypes = {
  dictionary: PropTypes.array.isRequired,
};
