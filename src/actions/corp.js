let WebIM = window.WebIM
//获取组织架构
//参数corps=[{id: 1123, name: '蓝筹科技' }, { id: 1124, name: '中瑞恒德' }]
export const fetchCorps = (corps) => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  let headers = {};
  headers.Authorization = WebIM.config.tokenLocal
  let args = { method: 'GET', mode: 'cors', headers: headers }
  let corpsIds = (corps.map(x => x.id)).join(',')
  let result = []
  //mode: "cors",

  //return fetch(WebIM.config.getFriendsUrl, args)
  //return fetch("https://www.reddit.com/r/reactjs.json")
  console.log("开始获取企业组织架构")
  return fetch(WebIM.config.getDeptsUrl + '?id=' + corpsIds, args).then(response => response.json())
    .then(json => {
      if (json != null) {
        console.log(json)
        /* result = json.map((x, index) => {
          return {deps:
            x.map(ele=>({name:ele.departName,users:ele.users.map(y=>({name:y.name,openId:y.openid}))})),companyId:corps[index].id,companyName:corps[index].name}          
        }) */
        result = json.map((x, index) => {
          return {
            deps:
            x.map(ele => ({
              name: ele.departName,
              users: ele.users.map(y=>({openId:y.openid,mobile:y.mobile,email:y.email,title:y.title,name:y.name}))
            })),
            companyId: corps[index].id,
            companyName: corps[index].name
          }
        })
        return dispatch(getCorps(result))
      }
      else {
        alert("获取公司信息出错！")
        return null;
      }
    })
}

//根据异步查询数据获取公司组织架构
export const getCorps = (json) => {
  console.log(json)
  return ({
    type: 'GET_CORPS',
    corps: json,
    receivedAt: Date.now()
  })
}
