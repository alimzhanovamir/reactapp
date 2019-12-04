import React from 'react';
import classes from './User-status.module.css';

export default class UserStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps) {
    // Защита от перерисовки статуса, если он не был изменен
    if ( prevProps.status !== this.props.status ) {
      console.log('change status');
      this.setState({
        status: this.props.status
      })
    }
    
  }

  activeEditMode() {
    this.setState({
      editMode: true
    });
  }

  deactiveEditMode() {
    this.setState({
      editMode: false
    });

    this.props.uploadStatus(this.state.status);
  }

  keyActiveEditMode(e) {
    if ( e.keyCode === 13 ) {
      this.setState({
        editMode: true
      });
    }
  }

  keyDeactiveEditMode(e) {
    if ( e.keyCode === 13 ) {
      this.setState({
        editMode: false
      });

      this.props.uploadStatus(this.state.status);
    }
  }

  onChangeStatus(e) {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div className={classes['user-status']}>
          <div 
            className={classes['user-status__field']}
            tabIndex='0' 
            role="button" 
            onKeyDown={this.keyActiveEditMode.bind(this)} 
            onClick={this.activeEditMode.bind(this)}
          >
            {this.props.status}
          </div>
          {
            this.state.editMode

            && 
            
            <div className={classes['user-status__edit']}>
              <input 
                className={classes['user-status__input']}
                autoFocus={true} 
                onChange={this.onChangeStatus.bind(this)}
                onKeyDown={this.keyDeactiveEditMode.bind(this)} 
                // onBlur={this.deactiveEditMode.bind(this)} 
                value={this.state.status} type="text"
              />
              <button 
                className={classes['user-status__button']}
                onClick={this.deactiveEditMode.bind(this)}
              >Сохранить</button>
            </div>
          }
      </div>
    )
  }
}