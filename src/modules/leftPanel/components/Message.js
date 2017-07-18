import React from 'react'
import PropTypes from 'prop-types'
import { convertDate, convertEmoji } from '../../../utils'
//左侧导航栏消息列表具体信息
const Message = (message) => (

  <li onClick={message.onMessageClick} className={message.selected ? "active" : ''}>
    <div className="webim_portrait"><img src={message.type === 0 ? window.WebIM.config.getAvatarByOpenId + message.openId : window.WebIM.config.baseHref + '/img/avatar/' + message.avatar + '.png'} /></div>
    <div className="webim_contact_info">
      <p className="webim_contact_username">
        <span className="title">{message.userName}</span>
        <span className="webim_contact_time">{convertDate(message.lastReceived, 'yy/MM/dd')}</span>
      </p>
      <p>
        <span className="webim_contact_p" dangerouslySetInnerHTML={{
                        __html: convertContent(message)
                    }}></span>
        <span className="webim_contact_time"><span className="list_message_tips" style={{
          display: message.newMsgs === null || message.newMsgs === '' || message.newMsgs === 0 ? 'none' : 'block'
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

//message.type===0?message.msgs[message.msgs.length - 1].data:message.msgs[message.msgs.length - 1].fromUser+'：'+message.msgs[message.msgs.length - 1].data): ''


const convertContent = (message) => {//从消息列表中获取最新一条记录并转换表情
  debugger
  if (message == null || message.msgs == null || message.msgs.length === 0)
    return ''
  let convertMsg = ''
  if (message.type != 0)
    convertMsg = message.msgs[message.msgs.length - 1].fromUser + ': '
  convertMsg += message.msgs[message.msgs.length - 1].data
  return convertEmoji(convertMsg)
}
export default Message

