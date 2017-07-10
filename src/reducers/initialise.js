//初始化，加载完好友、公司、群组后程序开始启动
const initialise = (state = { friends: 0, corps: 0, groups: 0 }, action) => {
    switch (action.type) {
        case 'GET_GROUPS':
            return { ...state, groups: 1 }
        case 'GET_CORPS':
            return { ...state, corps: 1 }
        case 'GET_FRIENDS':
            return { ...state, friends: 1 }
        default:
            return state;
    }
}
export default initialise;

