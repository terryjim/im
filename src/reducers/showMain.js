//1：根据聊天对象切换聊天窗口/2：或切换用户信息窗口/3：或切换群组
const showMain = (state = 0, action) => {    
    switch (action.type) {       
        case 'SHOW_MESSAGE':
            return 1;
        case 'SHOW_INTRO':       
            return 2;
        case 'SHOW_GROUPMEMBER':            
            return 3;
        default:
            return state;
    }
}
export default showMain;

