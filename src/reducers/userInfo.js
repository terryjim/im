//用户基础信息
/* openId: "0000000000000b64",     
   name: "刘勇",
   mobile: "13349957888",
   email: "yong.liu@bluechips.net.cn",
   Cards: [{ companyName: "蓝筹科技", title: "总经理" }]*/
const userInfo = (state = [], action) => {
    let openIds = state.map(x => x.openId)//原state中的openId数组,如果已有用户信息则更新，否则插入
    switch (action.type) {
        case 'GET_FRIENDS':
            let friends = action.friends
            friends.forEach(element => {
                if (openIds == null || openIds.length === 0 || openIds.indexOf(element.openId) < 0)
                    state.push(element)
                else
                    state[openIds.indexOf(element.openId)] = element
            });
            return state.slice();
        case 'GET_GROUPMEMBER':
            let groupMember = action.groupMember
            //openIds = state.map(x => x.openId)//原state中的openId数组,如果不存在插入，如果已有不作处理以免清除名片信息           
            groupMember.forEach(element => {
                if (openIds == null || openIds.length === 0 || openIds.indexOf(element.openId) < 0)
                    state.push(element)
            });
            return state.slice();
        case 'GET_CORPS':
            let corps = action.corps            
            if (corps != null && corps.length > 0) {
                corps.forEach(element => {
                    let deps = element.deps
                    deps.forEach(dep => {
                        let users = dep.users;
                        users.forEach(user => {
                            if (openIds == null || openIds.length === 0 || openIds.indexOf(user.openId) < 0)
                                state.push({...user,cards:[{companyName:element.companyName, title: user.title, departName: dep.name}]})
                            else {
                                //已存在用户信息，判断有没相同公司的名片，如果没有则插入
                                let oldUser = state[openIds.indexOf(user.openId)]
                                if (oldUser.cards === null || oldUser.cards.length === 0) {
                                    state[openIds.indexOf(user.openId)].cards = [{ companyId: element.companyId, companyName: element.companyName, title: user.title, departName: dep.name }]
                                } else if (oldUser.cards.map(x => x.companyName).indexOf(element.companyName) < 0) {
                                    state[openIds.indexOf(user.openId)].cards.push({ companyId: element.companyId, companyName: element.companyName, title: user.title, departName: dep.name })
                                }
                            }
                        })
                    })
                })
            }
            return state.slice();
        default:
            return state
    }
}
export default userInfo;