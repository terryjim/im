//公司组织架构

/*const sample = [
    { companyId: 1123, companyName: '蓝筹科技', collapsed: true, deps: [{ name: '研发', users: [{ name: '刘勇', openId: '0000000000000b64' }, { name: '刘勇2', openId: '0000000000000b70' }] }, { name: '市场部', users: [{ name: '刘勇3', openId: '0000000000000b7b' }, { name: '刘勇4', openId: '0000000000000b70' }] }] },
    { companyId: 1124, companyName: '中瑞恒德', collapsed: true, deps: [{ name: '人事', users: [{ name: '金飚', openId: '0000000000000b70' }, { name: '张璐', openId: '0000000000000b78' }] }] }
]*/


const corps = (state =null, action) => {
    if (action.type == 'GET_CORPS') {
        state = action.corps
    }
    return state;

}
export default corps;