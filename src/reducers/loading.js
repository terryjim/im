//在加载中的选项，１、好友２、群组３、组织
const loading = (state = 0, action) => {
    switch (action.type) {
        case 'GET_GROUPS':

        case 'GET_CORPS':

        case 'GET_FRIENDS':
            return 0
        case 'LOADING':
            return action.id
        default:
            return state;
    }
}
export default loading;

