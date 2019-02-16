import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export class SingleRow extends Component {

  state = {
    domain: this.props.domain,
    range: this.props.range,
    editable: false
  }

  render() {
    const {domain} = this.state;
    const {range} = this.state;

    return (
      <tr>
        <td>{domain}</td>
        <td>{range}</td>
        <td>
          <ButtonToolbar>
            <Button value="edit" variant="outline-secondary">Edit</Button>
            <Button value="save" variant="outline-primary">Save</Button>
            <Button value="delete" variant="outline-danger">Remove</Button>
          </ButtonToolbar>
        </td>
      </tr>
    )
  }
}

SingleRow.propTypes = {
  domain: PropTypes.string,
  range: PropTypes.string
};
