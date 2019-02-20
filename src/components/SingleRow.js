import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Form } from 'react-bootstrap';

export class SingleRow extends Component {
  constructor(props) {
    super(props);

    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleSaveAction = this.handleSaveAction.bind(this);
    this.handleRemoveAction = this.handleRemoveAction.bind(this);
    this.handleChangeAction = this.handleChangeAction.bind(this);

    this.state = {
      domain: this.props.domain,
      range: this.props.range,
      id: this.props.id,
      editable: false,
      editDisabled: false
    };
  }

  componentWillMount() {
    if ((this.state.domain === '') && (this.state.range === '')) {
      this.setState({
        editable: true,
        editDisabled: true
      })
    }
  }

  handleEditAction(event) {
    this.setState({
      editable: true,
      editDisabled: true
    })
  }

  handleSaveAction(event) {
    this.setState({
      editable: false,
      editDisabled: false
    });
  }

  handleRemoveAction(event) {
    let id = this.state.id;
    this.props.sendRowToRemoveId(id);
  }

  handleChangeAction(event) {
    var fieldName = event.target.name;
    var fieldValue = event.target.value;
    this.setState({
      [fieldName]: fieldValue
    })
  }

  render() {
    const {editable, domain, range, editDisabled} = this.state;

    return (
      <tr>
        {!editable && (
          <td>{domain}</td>
        )}
        {editable && (
          <td>
            <Form.Control name='domain'
              onChange={this.handleChangeAction}
              type='text'
              size='sm'
              defaultValue={domain}>
            </Form.Control>
          </td>
        )}
        {!editable && (
          <td>{range}</td>
        )}
        {editable && (
          <td>
            <Form.Control
              name='range'
              onChange={this.handleChangeAction}
              type='text'
              size='sm'
              defaultValue={range}>
            </Form.Control>
          </td>
        )}
        <td>
          <ButtonToolbar>
            <Button
              onClick={this.handleEditAction}
              size='sm'
              value='edit'
              variant='secondary'
              disabled={editDisabled}>
              Edit
            </Button>
            <Button
              onClick={this.handleSaveAction}
              size='sm'
              value='save'
              variant='primary'
              disabled={!editDisabled}>
              Save
            </Button>
            <Button
              onClick={this.handleRemoveAction}
              size='sm'
              value='delete'
              variant='danger'>
              Remove
            </Button>
          </ButtonToolbar>
        </td>
      </tr>
    )
  }
}

SingleRow.propTypes = {
  domain: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired
};
