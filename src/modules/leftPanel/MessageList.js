import { connect } from 'react-redux'
import { showMessage } from '../../actions/message'
import Messages from './components/Messages'
const mapStateToProps = (state) => {
  let hidden = state.topNav !== 1 ? true : false
  console.log(state.messages)
  let messages = convertMessages(state.messages, state.userInfo, state.groups)
  console.log(messages)
  return { messages, hidden, selectedItem: state.showMessage }
}
//左侧点击消息列表在右侧主窗口打开具体消息
const mapDispatchToProps = {
  onMessageClick: showMessage
}

const MessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)

export default MessageList

//转换消息列表，补充用户其它属性
const convertMessages = (messages, userInfos, groups) => {
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
          msgs=msgs.map(z => {
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




