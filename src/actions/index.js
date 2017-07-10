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
    isGroup:false,
    openId
  })
}
//选择好友显示好友基础信息
export const showIntro = (openId) => ({
  type: 'SHOW_INTRO',
  openId
})

/************************************************************
 * 其它事件
************************************************************/






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

