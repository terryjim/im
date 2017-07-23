
//根据聊天对象显示相应聊天界面
export const showMessage = ({ openId, isGroup = false }) => {
    return ({
        type: 'SHOW_MESSAGE',
        isGroup,
        openId,
    })
}


export const receiveMessage = (message, msgType = 'txt') => {
    return ({ type: 'RECEIVE_MESSAGE', message, msgType })
}

//添加已发送的消息到消息列表
export const appendSent = (message, msgType = 'txt') => {
    return ({
        type: 'APPEND_SENT',
        message,
        msgType
    })
}
//上传文件是否成功，消息ＩＤ、收件人
//isGruop:0/1,success:0/1
export const uploaded = (uid, sendTo, isGroup, success) => {
    return ({
        type: 'UPLOADED',
        uid,
        sendTo,
        isGroup,
        success
    })
}

//清空所有缓存消息
export const clearMessages=()=>{
    return ({type:'CLEAR_MESSAGES'})
}
