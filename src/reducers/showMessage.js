//左侧消息列表选中的消息
const showMessage = (state=0, action) => {
    switch (action.type) {
        case 'SHOW_MESSAGE':
            return action.openId
        default:
            return state;
    }
}
export default showMessage;

