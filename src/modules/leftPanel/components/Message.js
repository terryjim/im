import React from 'react'
import PropTypes from 'prop-types'
import {convertDate} from '../../../utils'
//左侧导航栏消息列表具体信息
const Message = (message) => (

  <li onClick={message.onMessageClick} className={message.selected ? "active" : ''}>
    <div className="webim_portrait"><img src={message.avatar} /></div>
    <div className="webim_contact_info">
      <p className="webim_contact_username">
        <span className="title">{message.userName}</span>
        <span className="webim_contact_time">{convertDate(message.lastReceived)}</span>
      </p>
      <p>
        <span className="webim_contact_p">{message.msgs == null ? '' : message.msgs.length > 0 ? message.msgs[message.msgs.length - 1].data : ''}</span>
        <span className="webim_contact_time"><span className="list_message_tips" style={{
          display: message.newMsgs == null || message.newMsgs == '' || message.newMsgs == 0 ? 'none' : 'block'
        }}>{message.newMsgs}</span></span>
      </p>
    </div>
  </li>

)



/*Msg.propTypes = {
      onClick: PropTypes.func.isRequired,
  newMsgs: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired
}*/


export default Message

