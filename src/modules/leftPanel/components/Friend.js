import React from 'react'
import PropTypes from 'prop-types'

const Friend = (friend) => {
 return (
    <li onClick={friend.onFriendClick} className={friend.selected ? "active" : ''}>
      <div className="webim_portrait"><img src={friend.avatar} /></div>
      <div className="webim_contact_info friend_name">{friend.name}</div>
    </li>
  )
}



/*Msg.propTypes = {
        onClick: PropTypes.func.isRequired,
  newMsgs: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired
}*/

export default Friend


