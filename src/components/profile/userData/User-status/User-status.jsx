import React from 'react';

export default class UserStatus extends React.Component {
  state = {
    editMode: false,
    title: 'test'
  }

  activeEditMode() {
    this.setState({
      editMode: true
    })
  }

  deactiveEditMode() {
    this.setState({
      editMode: false
    })
  }

  keyActiveEditMode(e) {
    if ( e.keyCode === 13 ) {
      this.setState({
        editMode: true
      })
    }
  }

  keyDeactiveEditMode(e) {
    if ( e.keyCode === 13 ) {
      this.setState({
        editMode: false
      })
    }
  }

  render() {
    return (
      <div>
        {
        !this.state.editMode ? 
          <div tabIndex='0' role="button" onKeyDown={this.keyActiveEditMode.bind(this)} onClick={this.activeEditMode.bind(this)}>{this.props.status}</div>
          :
          <input autoFocus={true} onKeyDown={this.keyDeactiveEditMode.bind(this)} onBlur={this.deactiveEditMode.bind(this)} value={this.props.status} type="text"/>
        }
      </div>
    )
  }
}