import React from 'react'
import PropTypes from 'prop-types'

const Group = (group) => {
  return (
    <li onClick={group.onGroupClick} className={group.selected ? "active" : ''}>     
      <div className="webim_portrait"><img src={'../../img/avatar/'+group.avatar+'.png'}  /></div>
      <div className="webim_contact_info friend_name">{group.name}</div>
    </li>
  )
}

/*Msg.propTypes = {
        onClick: PropTypes.func.isRequired,
  newMsgs: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired
}*/

export default Group


