import React from 'react';
import './UserData.css'
import Loading from '../../common/loading/Loading';
import UserStatus from './User-status/User-status';

function UserData(props) {

  if (props.profile) {
    return (
      <>
        {/* <div className="wide-image">
          <img src="http://www.artofvfx.com/THOR/THOR_WHISKYTREE_VFX_04.jpg" alt="" />
        </div> */}
        <div className="user-data">
          <div className="user-data__avatar">
            <img src={props.profile.photos.large} alt="" />
          </div>
          <div className="user-data__info">
            <UserStatus status={props.status} uploadStatus={props.uploadStatus}/>
            <div className="user-data__name test">{ props.profile.fullName }</div>
            <div className="user-data__site">{ props.profile.aboutMe }</div>
          </div>
        </div>
      </>
    )
  }
  else {
    return <Loading/>
  }

}

export default UserData