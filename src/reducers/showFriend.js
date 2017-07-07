//左侧好友列表选中的好友
const showFriend = (state = 0, action) => {
    switch (action.type) {
        case 'SHOW_INTRO':
            return action.openId;
        default:
            return state;
    }
}
export default showFriend;

