import React from 'react';
import { connect } from 'react-redux'
import ChatItem from './ChatItem'
import {appendSent} from '../../actions'
//消息窗口,由点击事件获取
let Chat = ({ hidden, openId, items}) => (

    <div className="webim_chatwindow" style={{
        display: hidden ? 'none' : ''
    }}>
        {items.map(item =>
            <ChatItem
                hidden={openId != item.openId} chat={item} 
            />
        )}
    </div>
)
/*
消息格式：
{
        openId: '0000000000000b7b',
        content: [
            {
                msg: "你好",
                send: "11:33",
                newMsg: true
            }
        ]
    }*/




const mapStateToProps = (state) => {
    let items = state.messages
    let openId = state.showMessage 
    return { openId, items}
}
Chat = connect(
    mapStateToProps
)(Chat)
export default Chat;
