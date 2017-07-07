//好友列表
const groupMember = (state = [{
   /* openId: "0000000000000b64",
    avatar: "http://ucapi.s-plus.cn/ucenter/portrait.php?openid=0000000000000b64",
    name: "刘勇",
    mobile: "13349957888",
    email: "yong.liu@bluechips.net.cn",
    Cards: [{ companyName: "蓝筹科技", title: "总经理" }]*/
}], action) => {
    if (action.type == 'GET_GROUPMEMBER') {
        state = action.groupMember.map(x=>x.openId)
    }
    return state;

}
export default groupMember;   