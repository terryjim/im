
//根据聊天对象显示相应聊天界面
export const showMessage = ({openId,isGroup=false}) => {
    return ({
        type: 'SHOW_MESSAGE',
        isGroup,
        openId,
    })
}


export const receiveMessage = (message) => {
    return ({ type: 'RECEIVE_MESSAGE', message })
}

//添加已发送的消息到消息列表
export const appendSent = (message) => {
    return ({
        type: 'APPEND_SENT',
        message
    })
}
