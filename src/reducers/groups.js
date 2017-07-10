//群组列表
const groups = (state =null, action) => {

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