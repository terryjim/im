//好友列表，openId数组
const friends = (state = null, action) => {
    if (action.type == 'GET_FRIENDS') {
        state = action.friends.map(x=>x.openId)
    }
    return state;

}
export default friends;