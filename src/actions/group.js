let WebIM = window.WebIM
//根据异步查询数据获取群组列表信息
export const getGroups = (json) => {
  console.log('获取群组信息')  
  return ({
    type: 'GET_GROUPS',
    groups: json,
    receivedAt: Date.now()
  })
}
//通过环信接口获取用户所在群组列表
export const fetchGroups = () => dispatch => {
  let options = {
    success: function (resp) {
      console.log('获取群组成功')
      if (resp.data.lenth === 0) return null;    
      let groups = resp.data.map(x => ({ 'openId': x.groupid, 'name': x.groupname }))      
      return dispatch(fetchGroupsAvatar(groups))
    },
    error: function (e) {
      console.log("获取群组列表出错！")
      console.log(e);
      alert("获取群组列表出错！")
      return null;
    }
  };
  if (WebIM.conn.isOpened())
    WebIM.conn.getGroup(options);
  else
    return null;
}
//根据fetchGroups得到的群组信息查询群组头像
const fetchGroupsAvatar = (groups) => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  let headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Authorization': WebIM.config.tokenLocal
  };
  let result = []
  console.log("开始获取群组头像")
  let args = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ids: groups.map(x => x.openId)
    })
  }
  return fetch(WebIM.config.getGroupAvatarUrl, args).then(response => response.json())
    .then(json => {
      if (json != null) {       
        result = json.Data.map(x => ({ iconUrl: x.IconUrl }))       
        groups.forEach((x,index)=> {
          x.avatar=result[index].iconUrl
        })        
        return dispatch(getGroups(groups))
      }
      else {
        alert("获取群组头像信息出错！")
        return null;
      }
    })
}

//返回左侧导航栏当前选中的群组
export const showGroupMember = (openId) => ({
  type: 'SHOW_GROUPMEMBER',
  openId
})

//根据异步查询数据获取群组成员列表信息
export const getGroupMember = (openId,json) => {
  console.log('getGroupMember')
  console.log(json)
  return ({
    type: 'GET_GROUPMEMBER',
    openId,
    groupMember: json,
    receivedAt: Date.now()
  })
}
export const fetchGroupMember = (groupId) => dispatch => {
  console.log('开始获取群组成员')  
  //dispatch(showGroupMember(groupId))   //左侧群组列表选中焦点
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
      return dispatch(fetchGroupMember2(groupId,groupMember))
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
export const fetchGroupMember2 = (groupId,groupMember) => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  let headers = {};
  let openIds = (groupMember.map(x => x.openId)).join(',')
  let args = { method: 'POST', mode: 'cors', body: convertObjectToFormData({ 'access_token': WebIM.config.token, openids: openIds }) }
  return fetch(WebIM.config.getUsersInfoUrl, args).then(response => response.json())
    .then(json => {
      if (json.status === 2000) {
        let list = json.data; console.log(list);
        list = list.map(child => ({ openId: child.openid, avatar: WebIM.config.getAvatarByOpenId + child.openid, name: child.realname, mobile: child.username, email: child.email }))
        list.sort((param1, param2) => (param1.name).localeCompare(param2.name))
        return dispatch(getGroupMember(groupId,list))
      }
      else {
        alert("获取群组用户信息出错！")
        return null;
      }
    })
}

function convertObjectToFormData(obj) {
  var formData = new FormData();
  for (var key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
}

