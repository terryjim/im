//左侧群组列表选中的群组
const showGroupMember = (state = 0, action) => {
    switch (action.type) {
        case 'SHOW_GROUPMEMBER':
            return action.openId;
        default:
            return state;
    }
}
export default showGroupMember;

