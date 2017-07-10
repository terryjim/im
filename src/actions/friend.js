let WebIM = window.WebIM

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
  console.log('查找好友')
  return fetch(WebIM.config.getFriendsUrl, args).then(response => response.json())
    .then(json => {
      if (json.Status === 200) {
        console.log('查找好友成功')
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
