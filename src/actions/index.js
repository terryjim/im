let WebIM = window.WebIM
/************************************************************
 * 上方导航事件
************************************************************/
//点击上方导航栏切换好友、群组等
//0：消息，1：好友，2：群组，3：组织
export const chgTopNav = (id) => ({
  type: 'CHG_TOP_NAV',
  id
})

/************************************************************
 * 左侧点击事件
************************************************************/
//根据聊天对象显示相应聊天界面
export const showMessage = openId => { 
  return ({
    type: 'SHOW_MESSAGE',
    openId
  })
}
//选择好友显示好友基础信息
export const showIntro = (openId) => ({
  type: 'SHOW_INTRO',
  openId
})
//选择群组显示群组成员信息
export const showGroupMember = (openId) => ({
  type: 'SHOW_GROUPMEMBER',
  openId
})
/************************************************************
 * 其它事件
************************************************************/
//根据异步查询数据获取好友列表信息
export const getFriends = (json) => {
  // console.log('------------------------')
  // console.log(json);
  return ({
    type: 'GET_FRIENDS',
    //friends: json.data.children.map(child => child.data),
    /* openId: "0000000000000b64",
     avatar: "http://ucapi.s-plus.cn/ucenter/portrait.php?openid=0000000000000b64",
     name: "刘勇",
     mobile: "13349957888",
     email: "yong.liu@bluechips.net.cn",
     cards: [{ companyName: "蓝筹科技", title: "总经理" }]*/

    friends: json,
    receivedAt: Date.now()
  })
}

export const fetchFriends = () => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  let headers = {};
  headers.Authorization = WebIM.config.tokenLocal
  let args = { method: 'GET', mode: 'cors', headers: headers }
  //mode: "cors",

  //return fetch(WebIM.config.getFriendsUrl, args)
  //return fetch("https://www.reddit.com/r/reactjs.json")
  return fetch(WebIM.config.getFriendsUrl, args).then(response => response.json())
    .then(json => {
      if (json.Status === 200) {
        let list = json.Data.list;
        list = list.map(child => ({ openId: child.OpenId, avatar: WebIM.config.getAvatarByOpenId + child.OpenId, name: child.Cards[0].name, mobile: child.Cards[0].mobile, email: child.Cards[0].email, ...child }))
        list.sort((param1, param2) => (param1.name).localeCompare(param2.name))
        return dispatch(getFriends(list))
      }
      else {
        alert("获取好友列表出错！")
        return null;
      }
    })
}

//根据异步查询数据获取群组列表信息
export const getGroups = (json) => {
 /* console.log('json----------')
  console.log(json)*/
  return ({
    type: 'GET_GROUPS',
    groups: json,
    receivedAt: Date.now()
  })
}
export const fetchGroups = () => dispatch => {
  let options = {
    success: function (resp) {
      console.log(resp)
      if (resp.data.lenth === 0) return null;
      let groups = resp.data.map(x => ({ 'openId': x.groupid, 'name': x.groupname }))
      console.log(groups)
      return dispatch(getGroups(groups))
    },
    error: function (e) {
      alert("获取群组列表出错！")
      console.log(e);
      return null;
    }
  };
  if (WebIM.conn.isOpened())
    WebIM.conn.getGroup(options);
  else
    return null;
}

//根据异步查询数据获取群组成员列表信息
export const getGroupMember = (json) => {
  return ({
    type: 'GET_GROUPMEMBER',
    groupMember: json,
    receivedAt: Date.now()
  })
}
export const fetchGroupMember = (groupId) => dispatch => {

  console.log('fetchGroupMember')
  console.log(groupId)
  dispatch(showGroupMember(groupId))   //左侧群组列表选中焦点
  let options = {
    groupId: groupId,
    pageNum: 1,
    pageSize: 9999,
    success: function (resp) {
      if (resp.data.lenth === 0) return null;
      let groupMember = resp.data.map(x => {
        if (x.owner != null)
          return { 'openId': x.owner, 'owner': true }
        else
          return { 'openId': x.member }
      })
      return dispatch(fetchGroupMember2(groupMember))
    },
    error: function (e) {
      alert("获取群组成员列表出错！")
      console.log(e);
      return null;
    }
  };
  console.log(options)
  if (WebIM.conn.isOpened())
    WebIM.conn.listGroupMember(options);
  else
    return null;
}

//根据fetchGroupMember得到的openId到用户中心取得详细信息
export const fetchGroupMember2 = (groupMember) => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  let headers = {};
  //headers.Authorization = WebIM.config.tokenLocal
  //headers['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'

  let openIds = (groupMember.map(x => x.openId)).join(',')
  let args = { method: 'POST', mode: 'cors', body: convertObjectToFormData({ 'access_token': WebIM.config.token, openids: openIds }) }
  return fetch(WebIM.config.getUsersInfoUrl, args).then(response => response.json())
    .then(json => {
      if (json.status === 2000) {
        let list = json.data; console.log(list);
        list = list.map(child => ({ openId: child.openid, avatar: WebIM.config.getAvatarByOpenId + child.openid, name: child.realname, mobile: child.username, email: child.email }))
        list.sort((param1, param2) => (param1.name).localeCompare(param2.name))
        return dispatch(getGroupMember(list))
      }
      else {
        alert("获取群组用户信息出错！")
        return null;
      }
    })
}
//根据openId数组
export const fetchUserInfo = (openIds, dispatch) => {
  //不能用headers=new Headers()，否则跨域出错
  let headers = {};
  headers.Authorization = WebIM.config.tokenLocal
  let args = { method: 'GET', mode: 'cors', headers: headers }
  return fetch(WebIM.config.getFriendsUrl, args).then(response => response.json())
    .then(json => {
      if (json.Status === 200) {
        let list = json.Data.list;
        list = list.map(child => ({ openId: child.OpenId, avatar: WebIM.config.getAvatarByOpenId + child.OpenId, name: child.Cards[0].name, mobile: child.Cards[0].mobile, email: child.Cards[0].email, ...child }))
        list.sort((param1, param2) => (param1.name).localeCompare(param2.name))
        return dispatch(getFriends(list))
      }
      else {
        alert("获取好友列表出错！")
        return null;
      }
    })
}

export const receiveMessage = (message) => {
  return ({ type: 'RECEIVE_MESSAGE', message })
}

//添加已发送的消息到消息列表
export const appendSent = (message) => {
  return ({
    type: 'APPEND_SENT',
    message
  })
}


function convertObjectToFormData(obj) {
  var formData = new FormData();
  for (var key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
}

