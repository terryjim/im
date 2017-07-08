//群组列表
const groups = (state = [{
    openId: "0000000000000b64",
    avatar: "http://ucapi.s-plus.cn/ucenter/portrait.php?openid=0000000000000b64",
    name: "刘勇", members: []
}], action) => {

    switch (action.type) {
        case 'GET_GROUPS':
            return action.groups
        case 'GET_GROUPMEMBER':
            let group = (state.filter(x => x.openId === action.openId))[0]
            group.members = action.groupMember.map(y => y.openId)
            return state.slice()
        default:
            return state
    }
}
export default groups;