import React, { Component } from 'react';
import { convertDate } from '../../utils'
import { connect } from 'react-redux'
import { appendSent } from '../../actions/message'
import { utils } from 'easemob-websdk'
import {convertEmoji} from '../../utils'
//消息窗口  
/*
消息内容格式：
 {
        openId: '0000000000000b7b',
        userName: '钱钱钱钱',
        newMsgs: 12,//未读消息数
        lastReceived: 1498640400,//最后一条接收时的时间戳
        msgs: [
            {
                id: "你好",
                type: 'chat',
                from:'',
                to: ',',
                data: '',
                newMsg: true,
                received: 1498640400//接收时的时间戳
            }
        ]
    }
    */

class ChatItem extends Component {
    componentDidUpdate() {
        this.chatwindow.scrollTop = this.chatwindow.scrollHeight//消息窗口滚动条自动移到最下方       
    }
    fileChange = () => {
        //debugger
        //var me = this,       
        let uid = window.WebIM.conn.getUniqueId(),
            msg = new window.WebIM.message('file', uid),
            chatroom = window.WebIM.selectedCate === 'chatrooms',
            file = utils.getFileUrl(this.file),
            fileSize = utils.getFileSize(this.file),
            fileLength = utils.getFileLength(this.file),
            filename = file.filename;
        let allowType = window.WebIM.config.allowFileType
      /*  if (!fileSize) {
            window.WebIM.api.NotifyError(window.WebIM.lan.fileOverSize);
            return false;
        }
        if (!file.filename) {
            this.file.value = null;
            return false;
        }*/
        if (file.filetype.toLowerCase() in allowType) {
            let option = {
                apiUrl: window.WebIM.config.apiURL,
                file: file,
                to: this.props.sendTo,                       // 接收消息对象
                roomType: false,
                chatType: 'singleChat',
                onFileUploadError: function () {      // 消息上传失败
                    console.log('onFileUploadError');
                },
                onFileUploadComplete: function () {   // 消息上传成功
                    console.log('onFileUploadComplete');
                },
                success: function () {                // 消息发送成功
                    console.log('Success');
                },
                flashUpload: window.WebIM.flashUpload
            };
            msg.set(option);
            window.WebIM.conn.send(msg.body);
        }
    }

    render() {
        // let msgs = this.props.chat.msgs       
        let msgsAll = this.props.msgsAll
        msgsAll = msgsAll.filter(x => x.openId == this.props.sendTo)
        let thisMsg = (msgsAll == null || msgsAll.length === 0) ? null : msgsAll[0]

        let msgs = thisMsg.msgs
        console.log(msgs)
        let content = []
        let lastReceived = ''
        let isMe = false //判断消息是对方发的还是我发的

        if (msgs != null && msgs.length > 0) {
            msgs.forEach((msg, index, array) => {
                if ((msg.received).substring(0, 19) != lastReceived.substring(0, 19)) {  //若相临消息有相同的时间则只显示一次时间信息(不判断毫秒)
                    lastReceived = msg.received
                    content.push(<div className="col-sm-12 text-center font_size12 text_gray m-b">{convertDate(lastReceived)}</div>)
                }
                isMe = msg.from == window.WebIM.config.openId
                console.log(msgs)
                content.push(<div className={isMe ? "col-sm-12 m-b  text-right" : "col-sm-12 m-b"}>
                    <div className={isMe ? "webim_portrait pull-right m-l-sm" : "webim_portrait m-r-sm"}><img src={isMe ? window.WebIM.config.getAvatarByOpenId + window.WebIM.config.openId : window.WebIM.config.getAvatarByOpenId + msg.from} /></div>
                    {thisMsg.type == 0 || isMe ? '' : <div className="msg_bubble_name pull-left m-l-sm">{msg.fromUser}</div>}
                    <div className={isMe ? "bubble_arrow rotate" : "bubble_arrow"}></div>
                    <div className="bubble_cont" dangerouslySetInnerHTML={{
                        __html: convertEmoji(msg.data)
                    }}>
                    </div>
                </div>)
            })
        }

        return (
            <div style={{
                display: this.props.hidden ? 'none' : ''
            }}>
                <div className="webim_chatwindow">
                    <div className="user_info_header">
                        <h3 id="name">{thisMsg.userName}<small className="icon_chat"><i className="fa fa-comment"></i></small></h3>
                    </div>
                    <div className="webim_chatwindow_msg" ref={chatwindow => this.chatwindow = chatwindow}>

                        <div className="row" >
                            {content}
                        </div>
                    </div>
                    <div className="webim-send-wrapper">
                        <div className="webim-chatwindow-options">
                           {/* <!--选择表情包start-->*/}
                <div class="face-wrapper">
                	<h5>经典表情</h5>
                   {/* <!--表情包start-->*/}
                	<ul className="face-container" ref={face_box=>this.face_box=face_box}>
                        {new Array(76).map((x,index)=>{
                                this.face_box.append('<li><a href="#"><img src="img/emoji/'+(index+1)+'.gif"/></a></li>')
                            })}
						
                    </ul>
                   {/* <!--表情包end-->*/}
                    <ul className="face-footer">
                    	<li><a href="#" class="active"><img src="img/emoji/face-icon.png"/></a></li>
                    </ul>
                </div>
                {/*<!--选择表情包end-->*/}
                            <a href="#"><span className="icon-smiling-face"></span></a>
                            <a href="#"><span className="icon-picture"></span></a>
                            <a href="#" onClick={() => this.file.click()}><span className="icon-adjunct"></span></a>
                            <input ref={file => this.file = file}
                                onChange={this.fileChange}
                                type='file'
                                className='hide' />
                            <a href="#"><span className="icon-audio"></span></a>
                        </div>
                        <textarea ref={textarea => {
                            this.content = textarea
                        }} ></textarea>
                        <button className="webim-send-btn" onClick={() => sendMsg(thisMsg.type, 0, this.props.sendTo, this.content.value, this.props.dispatch, () => { this.content.value = '' })}>发送</button>
                    </div>
                </div>
            </div>
        )
    }
}

//发送消息，成功后添加到接收消息列表中
//@param 聊天类型个人、群组，消息类型文本、图片……，内容，dispatch,回调清除发送栏
const sendMsg = (chatType, msgType, openId, content, dispatch, func) => {
    //chatType 0:个人1：群组
    let id = window.WebIM.conn.getUniqueId();         // 生成本地消息id
    let msg = new window.WebIM.message('txt', id); // 创建文本消息     
    let options = {
        msg: content,                  // 消息内容
        to: openId,                          // 接收消息对象（用户id）
        roomType: false,
        success: function (id, serverMsgId) {
            dispatch(appendSent({
                id,
                type: 'singleChat',
                from: window.WebIM.config.openId,
                to: openId,
                data: content
            }))
            func()//清空发送框
        },
        fail: function () {
            alert('信息发送失败');
        }
    }
    if (chatType === 1)
        options.chatType = 'chatRoom'
    msg.set(options)
    if (chatType === 0)
        msg.body.chatType = 'singleChat';
    if (chatType === 1)
        msg.setGroup('groupchat');
    //console.log(msg.body)
    window.WebIM.conn.send(msg.body);

}
const mapStateToProps = (state) => {
    let msgsAll = convertMessages(state.messages, state.userInfo, state.groups)
    return { msgsAll }
}

ChatItem = connect(mapStateToProps)(ChatItem)

export default ChatItem



//转换消息列表，补充用户其它属性
const convertMessages = (messages, userInfos, groups) => {
    console.log(messages)
    return (messages.map(x => {
        if (x.type === 0) {//个人
            let infos = userInfos.filter(y => y.openId == x.openId)
            if (infos != null && infos.length > 0) {
                return { ...x, userName: infos[0].name, avatar: infos[0].avatar }
            }
            else
                return x
        } else {//群组
            let group = groups.filter(y => y.openId == x.openId)
            if (group != null && group.length > 0) {
                let msgs = x.msgs
                if (msgs != null && msgs.length > 0) {
                    debugger
                    msgs = msgs.map(z => {
                        //查找群组内发信人信息
                        let sendMan = (userInfos.filter(user => user.openId == z.from))[0]
                        return { ...z, fromUser: sendMan.name }
                    })
                }
                return { ...x, msgs, userName: group[0].name, avatar: group[0].avatar }
            }
            else
                return x
        }
    }
    ))
}

