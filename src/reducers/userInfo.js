//用户基础信息
const userInfo = (state = [{
    /* openId: "0000000000000b64",
     avatar: "http://ucapi.s-plus.cn/ucenter/portrait.php?openid=0000000000000b64",
     name: "刘勇",
     mobile: "13349957888",
     email: "yong.liu@bluechips.net.cn",
     Cards: [{ companyName: "蓝筹科技", title: "总经理" }]*/
}], action) => {
    switch (action.type) {
        case 'GET_FRIENDS':
            let friends = action.friends
            let openIds = state.map(x => x.openId)//原state中的openId数组,如果已有用户信息则更新，否则插入
            friends.forEach(element => {
                if (openIds == null || openIds.length === 0 || openIds.indexOf(element.openId) < 0)
                    state.push(element)
                else
                    state[openIds.indexOf(element.openId)] = element
            });
            return state.slice();
        case 'GET_GROUPMEMBER':
            let groupMember = action.groupMember
            openIds = state.map(x => x.openId)//原state中的openId数组,如果不存在插入，如果已有可能好友不处理以免清除名片信息
            groupMember.forEach(element => {
                if (openIds == null || openIds.length === 0 || openIds.indexOf(element.openId) < 0)
                    state.push(element)              
            });
            return state.slice();
        default:
            return state

    }
}
export default userInfo;