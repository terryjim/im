//异步获取所有消息列表
const messages = (state = [
    /*{
         openId: '0000000000000b7b',
         userName: '钱钱钱钱',
         newMsgs: 12,//未读消息数
         lastReceived: 1498640400,//最后一条接收时的时间戳
         type:0,//0:个人1：群组
         msgs: [
             {
                 id: "你好",
                 type: 'chat',
                 to: ',',
                 data: '',
                 newMsg: true,
                 received://接收时的时间  服务器端延迟消息：delay:"2017-06-29T02:37:39.187Z"
             }
         ]
    }，{
         openId: '0000000000000b7b',
         userName: '钱钱钱钱',
         newMsgs: 12,//未读消息数
         lastReceived: 1498640400,//最后一条接收时的时间戳
         type:1,//0:用户1：群组
         msgs: [
             {
                 id: "你好",
                 type: 'chat',
                 from:'',//群组内发言的用户openId
                 userName:'',//群组内发言的用户名
                 to: ',',
                 data: '',
                 newMsg: true,
                 received://接收时的时间  服务器端延迟消息：delay:"2017-06-29T02:37:39.187Z"
             }
         ]
    }*/

], action) => {
    //state中消息列表所有的openID
    let msgOpenIds = new Array();
    state.forEach(x => msgOpenIds.push(x.openId))
    switch (action.type) {
        case 'GET_FRIENDS':
            //如果获取到的好友不存在消息列表则在消息列表中新增一条空记录以避免打开消息窗口时出错
            let friendOpenIds = msgOpenIds.filter(x => x.type === 0)
            let friends = action.friends
            friends.forEach(friend => {
                if (friendOpenIds.indexOf(friend.openId) < 0) {
                    state = [...state, { type: 0, openId: friend.openId, avatar: window.WebIM.config.getAvatarByOpenId + friend.OpenId, userName: friend.name, newMsgs: 0, msgs: [] }]
                }
            }
            )
            return state;

        case 'GET_GROUPS':
            //如果获取到的群组不存在消息列表则在消息列表中新增一条空记录以避免打开消息窗口时出错
            //state中消息列表所有的openID           
            let groupOpenIds = msgOpenIds.filter(x => x.type === 1)
            let groups = action.groups
            groups.forEach(group => {
                if (groupOpenIds.indexOf(group.openId) < 0) {
                    state = [...state, { type: 1, openId: group.openId, avatar: window.WebIM.config.getAvatarByOpenId + group.OpenId, userName: group.name, newMsgs: 0, msgs: [] }]
                }
            }
            )
            return state;
        case 'SHOW_MESSAGE':  //取消未读状态
            state.map(x => {
                if (x.openId === action.openId) {  //未处理群组和用户存在openId相同的情况
                    x.newMsgs = 0
                }
            })
            return state.slice();

        case 'RECEIVE_MESSAGE':
            let receivedMsg = {}
             message = action.message
            if (message.delay != null)
                receivedMsg.received = new Date(message.delay).Format("yyyy-MM-dd hh:mm:ss.S");
            else
                receivedMsg.received = new Date().Format("yyyy-MM-dd hh:mm:ss.S");
            receivedMsg.id = message.id
            receivedMsg.type = message.type
            receivedMsg.from = message.from
            receivedMsg.to = message.to
            receivedMsg.data = message.data
            receivedMsg.newMsg = true
            if (message.type.indexOf('group') === 0) {//群组消息
                state.map(x => {
                    if (x.openId === message.to) {
                        x.msgs.push(receivedMsg)
                        x.newMsgs++
                        x.lastReceived = receivedMsg.received
                    }
                })
            } else {//个人消息
                state.map(x => {
                    if (x.openId === message.from) {
                        x.msgs.push(receivedMsg)
                        x.newMsgs++
                        x.lastReceived = receivedMsg.received
                    }
                })
            }

            state.sort((x, y) => {
                if (x.lastReceived == null && y.lastReceived == null)
                    return 0 //都为空时顺序不变
                if (x.lastReceived == null)
                    return 1
                if (y.lastReceived == null)
                    return -1
                if (x.lastReceived > y.lastReceived)
                    return -1
                if (x.lastReceived < y.lastReceived)
                    return 1
                return 0
            }
            )

            return state.slice()   //拷贝state以生成新state

        case 'APPEND_SENT':
            //添加已发送的消息到消息列表
            let msg = {}
            let message = action.message          
            msg.received = new Date().Format("yyyy-MM-dd hh:mm:ss.S");
            msg.id = message.id
            msg.type = message.type
            msg.from = message.from
            msg.to = message.to
            msg.data = message.data
            msg.newMsg = false
            if (message.type.indexOf('group') === 0) {//群组消息
                state.map(x => {
                    if (x.openId === message.to) {
                        x.msgs.push(msg)
                        x.newMsgs++
                        x.lastReceived = msg.received
                    }
                })
            } else {//个人消息
                state.map(x => {
                    if (x.openId === message.to) {
                        x.msgs.push(msg)
                        //x.newMsgs++
                        x.lastReceived = msg.received
                    }
                })
            }

            state.sort((x, y) => {
                if (x.lastReceived == null && y.lastReceived == null)
                    return 0 //都为空时顺序不变
                if (x.lastReceived == null)
                    return 1
                if (y.lastReceived == null)
                    return -1
                if (x.lastReceived > y.lastReceived)
                    return -1
                if (x.lastReceived < y.lastReceived)
                    return 1
                return 0
            }
            )
            return state.slice()   //拷贝state以生成新state
        default:
            return state;
    }

}


export default messages;