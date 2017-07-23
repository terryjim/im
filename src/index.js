import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import md5 from 'md5'
import SDK from 'easemob-websdk'
import { receiveMessage } from './actions/message'
import { fetchCorps } from './actions/corp'
import { fetchGroups } from './actions/group'
import { fetchFriends } from './actions/friend'
let WebIM = window.WebIM
let conn = new SDK.connection({
    https: WebIM.config.https,
    url: WebIM.config.xmppURL,
    apiUrl: WebIM.config.apiURL,
    isAutoLogin: WebIM.config.isAutoLogin,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions
});
WebIM.conn = conn
debugger
conn.listen({
    onOpened: function (message) {          //连接成功回调
        // 如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
        // 手动上线指的是调用conn.setPresence(); 如果conn初始化时已将isAutoLogin设置为true
        // 则无需调用conn.setPresence();   
        //获取群组 
        if (store.getState().groups == null) {            
            store.dispatch(fetchGroups());
        }
        //getGroups();
        //获取好友
        //获取消息列表
        //获取组织架构

    },
    onClosed: function (message) { },         //连接关闭回调
    onTextMessage: function (message) {
        console.log(message)
        store.dispatch(receiveMessage(message))
    },    //收到文本消息
    onEmojiMessage: function (message) {
        console.log(message)
    },   //收到表情消息
    onPictureMessage: function (message) { console.log(message) }, //收到图片消息
    onCmdMessage: function (message) { console.log(message) },     //收到命令消息
    onAudioMessage: function (message) { console.log(message) },   //收到音频消息
    onLocationMessage: function (message) { console.log(message) },//收到位置消息
    onFileMessage: function (message) { console.log(message); store.dispatch(receiveMessage(message, 'file')) },    //收到文件消息
    onVideoMessage: function (message) {
        var node = document.getElementById('privateVideo');
        var option = {
            url: message.url,
            headers: {
                'Accept': 'audio/mp4'
            },
            onFileDownloadComplete: function (response) {
                var objectURL = WebIM.utils.parseDownloadResponse.call(conn, response);
                node.src = objectURL;
            },
            onFileDownloadError: function () {
                console.log('File down load error.')
            }
        };
        WebIM.utils.download.call(conn, option);
    },   //收到视频消息
    onPresence: function (message) { },       //收到联系人订阅请求、处理群组、聊天室被踢解散等消息
    onRoster: function (message) { },         //处理好友申请
    onInviteMessage: function (message) { },  //处理群组邀请
    onOnline: function () { },                  //本机网络连接成功
    onOffline: function () { },                 //本机网络掉线
    onError: function (message) { },          //失败回调
    onBlacklistUpdate: function (list) {       //黑名单变动
        // 查询黑名单，将好友拉黑，将好友从黑名单移除都会回调这个函数，list则是黑名单现有的所有好友信息
        console.log(list);
    }
});
//登录
let options = {
    apiUrl: WebIM.config.apiURL,
    user: WebIM.config.openId,
    pwd: md5((WebIM.config.openId + 'BLUECHIPS')).substring(0, 8).toUpperCase(),
    appKey: WebIM.config.appkey
};
conn.open(options);

const store = createStore(reducers, undefined,
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    ))
persistStore(store, {}, () => {
    //获取组织架构
    if (store.getState().corps == null) {      
        store.dispatch(fetchCorps(WebIM.config.userCorps));
    }
    //获取好友列表
    if (store.getState().friends == null) {       
        store.dispatch(fetchFriends());
    }
})



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



//store.subscribe(()=>console.log(store.getState()))
registerServiceWorker();

// 对Date的扩展，将 Date 转化为指定格式的String  
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，  
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)  
// 例子：  
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423  
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18  
Date.prototype.Format = function (fmt) { //author: meizz  
    var o = {
        "M+": this.getMonth() + 1,                 //月份  
        "d+": this.getDate(),                    //日  
        "h+": this.getHours(),                   //小时  
        "m+": this.getMinutes(),                 //分  
        "s+": this.getSeconds(),                 //秒  
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度  
        "S": this.getMilliseconds()             //毫秒  
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

