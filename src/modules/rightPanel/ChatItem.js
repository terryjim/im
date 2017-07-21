import React, { Component } from 'react';
import { convertDate } from '../../utils'
import { connect } from 'react-redux'
import { appendSent } from '../../actions/message'
import { utils } from 'easemob-websdk'
import { convertEmoji } from '../../utils'

class ChatItem extends Component {
    constructor(props) {
        super(props)
    }
    componentDidUpdate() {
        this.chatwindow.scrollTop = this.chatwindow.scrollHeight//消息窗口滚动条自动移到最下方       
    }
    //发送附件
    fileChange = (chatType, sendTo, dispatch) => {
        //chatType 0:个人1：群组  
        //debugger
        //var me = this,       
        let uid = window.WebIM.conn.getUniqueId(),
            msg = new window.WebIM.message('file', uid),
            chatroom = window.WebIM.selectedCate === 'chatrooms',
            file = utils.getFileUrl(this.file),
            fileSize = utils.getFileSize(this.file),
            fileLength = utils.getFileLength(this.file),
            fileName = file.filename;
        this.file.value = '' //清空文件上传框，以避免同名文件onchange事件失效
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
            let options = {
                apiUrl: window.WebIM.config.apiURL,
                file: file,
                to: sendTo,                       // 接收消息对象
                roomType: false,
                chatType: 'singleChat',
                ext: {
                    fileSize: fileSize,
                    file_length: fileLength
                },
                onFileUploadError: function (e) {      // 消息上传失败
                    console.log(e)
                    alert('文件上传失败')
                    console.log('onFileUploadError');
                },
                onFileUploadComplete: function () {   // 消息上传成功                   
                    console.log('onFileUploadComplete');
                },
                success: function () {
                    // 消息发送成功
                    console.log('Success');
                    console.log(msg)
                    dispatch(appendSent({
                        id: uid,
                        type: 'singleChat',
                        from: window.WebIM.config.openId,
                        to: sendTo,
                        url: msg.body.body.url,
                        fileName: fileName,
                        fileLength: fileLength,
                        fileSize: fileSize
                    }, 'file'))

                },
                flashUpload: window.WebIM.flashUpload
            };
            if (chatType === 1)
                options.chatType = 'chatRoom'
            msg.set(options)
            if (chatType === 0)
                msg.body.chatType = 'singleChat';
            if (chatType === 1)
                msg.setGroup('groupchat');


            window.WebIM.conn.send(msg.body);
        } else {
            alert('不允许上传此类文件，请打包后上传！')
        }
    }
    appendEmoji = () => {
        let emojis = new Array(35)

        for (let i = 1; i < 36; i++) {
            emojis[i] = <li key={i} onClick={() => this.content.value += findEmoji(i)}><a href='#'><img src={window.WebIM.config.baseHref + '/img/faces/ee_' + i + '.png'} /></a></li>
        }
        return emojis
    }
    messageFormat = (msg) => {
        //根据消息类型及附件发送状态显示不同样式
        debugger
        if (msg.msgType === "txt")
            return convertEmoji(msg.data)
        if (msg.msgType === 'file') {
            if (msg.from !== window.WebIM.config.openId) {//接收到的消息
                let a= `<span class="send-file">
                        <p><a download=`+msg.fileName+' href='+msg.url+' class="line-block">'+msg.fileName+`</a>
                            <small>`+msg.fileSize+`</small></p>
                        <p>
                            <a download=`+msg.fileName+' href="'+msg.url+`">
                                    <i class="fa fa-arrow-circle-o-down text-danger"></i>
                                    <small>点击下载</small>
                                    </a>                            
                        </p>
                    </span>`
                    console.log(a)
                return  a 
            } else {
                switch (msg.upload) {
                    case 0:
                        return (<span className="send-file">
                            <p><a href="#" className="line-block">新建文本文档.txt</a><small>3.5k</small></p>
                            <p>
                                <img className="send-load m-r-xs" src="../../img/send-load.gif" /><small>正在发送中...</small>
                            </p>
                        </span>)
                    case 1:
                        return (<span className="send-file">
                            <p><a href="#" className="line-block">新建文本文档.txt</a><small>3.5k</small></p>
                            <p>
                                <i className="fa fa-check-circle text-success m-r-xs"></i><small>发送成功</small>
                            </p>
                        </span>)
                    case 2:
                        return (<span className="send-file">
                            <p><a href="#" className="line-block">新建文本文档.txt</a><small>3.5k</small></p>
                            <p>
                                <i className="fa fa-times-circle text-danger m-r-xs"></i><small>发送失败</small>
                                <a href="#" className="m-l-md"><i className="fa fa-exclamation-circle text-danger m-r-xs"></i><small>重新发送</small></a>
                            </p>
                        </span>)
                    default:
                        return ''
                }
            }
        }
    }
    render() {
        console.log(this.state);
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
                        __html: this.messageFormat(msg)                      
                    }}>
                    </div>
                </div>)
            })
        }

        return (
            <div style={{
                display: this.props.hidden ? 'none' : ''
            }}>
                <div className="webim_chatwindow" onClick={e => { this.selectFace.style.display = "none"; }}>
                    <div className="user_info_header">
                        <h3 id="name">{thisMsg.userName}<small className="icon_chat"><i className="fa fa-comment"></i></small></h3>
                    </div>
                    <div className="webim_chatwindow_msg" ref={chatwindow => this.chatwindow = chatwindow}>

                        <div className="row" >
                            {content}
                        </div>
                    </div>
                    <div className="webim-send-wrapper">
                        {/* <!--选择表情包start-->*/}
                        <div className="face-wrapper" ref={selectFace => this.selectFace = selectFace} style={{
                            display: 'none'
                        }}>
                            <h5>经典表情</h5>
                            {/* <!--表情包start-->*/}
                            <ul className="face-container" >
                                {this.appendEmoji()}
                            </ul>
                            {/* <!--表情包end-->*/}
                            {/*  <ul className="face-footer">
                                <li><a href="#" className="active"><img src="../../../img/emoji/face-icon.png" /></a></li>
                            </ul>*/}
                        </div>
                        {/*<!--选择表情包end-->*/}
                        <div className="webim-chatwindow-options">
                            <a href="#" onClick={e => { this.selectFace.style.display = "block"; e.stopPropagation() }}><span className="icon-smiling-face"></span></a>
                            {/*<a href="#"><span className="icon-picture"></span></a>*/}
                            <a href="#" onClick={() => this.file.click()}><span className="icon-adjunct"></span></a>
                            <input ref={file => this.file = file}
                                onChange={() => this.fileChange(thisMsg.type, this.props.sendTo, this.props.dispatch)}
                                type='file'
                                className='hide' />
                            {/*<a href="#"><span className="icon-audio"></span></a>*/}
                        </div>
                        <textarea ref={textarea => {
                            this.content = textarea
                        }} ></textarea>
                        <button className="webim-send-btn" onClick={(e) => { debugger; sendMsg(thisMsg.type, 0, this.props.sendTo, this.content.value, this.props.dispatch, () => { this.content.value = '' }); e.stopPropagation(); }}>发送</button>
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
const findEmoji = (index) => {
    debugger
    let emojis = window.WebIM.emoji
    let found = false
    for (let key in emojis) {
        if ("ee_" + index + ".png" === emojis[key]) {
            return key
        }
    }
    return ''
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

