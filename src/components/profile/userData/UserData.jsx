import React from 'react';
import './UserData.css'

function UserData(props) {
  return (
    <div className="user-data">

      <div className="user-data__avatar">
        <img src="https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png" alt="" />
      </div>

      <div className="user-data__info">
        <div className="user-data__name test">{ props.userData.name }</div>
        <div className="user-data__site">{ props.userData.site }</div>
      </div>

    </div>
  )
}

export default UserData