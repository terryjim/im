import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

//左侧导航栏消息列表
const Messages = ({ messages, onMessageClick, hidden, selectedItem}) => (
    <ul className="webim_leftbar_message im_tab_nav_no" style={{
        display: hidden ? 'none' : 'block'
    }}>
        {messages!=null?messages.map(msg =>
            <Message
                key={msg.openId}
                {...msg}
                onMessageClick={() => onMessageClick({openId:msg.openId,isGroup:msg.type})}
                selected={selectedItem==msg.openId}  
            />):null

        }
    </ul>
)
/*[
    {
        openId: '0000000000000b7b',
        userName: '钱钱钱钱',
        newMsgs: 12,//未读消息数
        lastReceived: 1498640400,//最后一条接收时的时间戳
        msgs: [
            {
                id: "你好",
                type: 'chat',
                to: ',',
                data: '',
                newMsg: true,
                received: 1498640400//接收时的时间戳  服务器端延迟消息：delay:"2017-06-29T02:37:39.187Z"
            }
        ]
    }

]*/

/*Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  newMsgs: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}
*/
export default Messages

