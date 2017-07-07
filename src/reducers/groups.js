//群组列表
const groups = (state = [{
    openId: "0000000000000b64",
    avatar: "http://ucapi.s-plus.cn/ucenter/portrait.php?openid=0000000000000b64",
    name: "刘勇", members: []
}], action) => {
    if (action.type == 'GET_GROUPS') {
        state = action.groups
    }
    return state;

}
export default groups;