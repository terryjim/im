import { connect } from 'react-redux'
import { showMessage } from '../../actions'
import Messages from './components/Messages'
const mapStateToProps = (state) => {
  let hidden = state.topNav !== 1 ? true : false 
  console.log(state.messages)
  return { messages: state.messages, hidden, selectedItem: state.showMessage}
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




