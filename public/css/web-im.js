import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  charset: 'utf-8',
  'body': {
    'background': '#e4e4e4',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontFamily': 'Microsoft YaHei',
    'color': '#333'
  },
  // 通用样式
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ul': {
    'listStyle': 'none'
  },
  'ol': {
    'listStyle': 'none'
  },
  'input': {
    'outline': 'none',
    'fontFamily': 'Microsoft YaHei'
  },
  'button': {
    'outline': 'none',
    'fontFamily': 'Microsoft YaHei'
  },
  'button': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'a': {
    'color': '#333',
    'textDecoration': 'none'
  },
  'pull_left': {
    'float': 'left'
  },
  'pull_right': {
    'float': 'right'
  },
  'text_center': {
    'textAlign': 'center'
  },
  'webim_chat': {
    'minWidth': [{ 'unit': 'px', 'value': 700 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  // 头部指南
  'im_header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 58 }],
    'background': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#ececec' }, { 'unit': 'string', 'value': 'solid' }],
    'borderTopLeftRadius': '3px',
    'borderTopRightRadius': '3px'
  },
  'im_header_seach': {
    'width': [{ 'unit': 'px', 'value': 165 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'background': 'url(../img/icon-search.png) no-repeat 93% center #f1f3f7',
    'borderRadius': '15px',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'margin': [{ 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'im_tab_nav': {
    'display': 'inline-table'
  },
  'im_tab_nav li': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'marginRight': [{ 'unit': 'px', 'value': 50 }],
    'color': '#b5b5b5',
    'cursor': 'pointer'
  },
  'im_tab_nav thistab': {
    'color': '#199acb'
  },
  'im_tab_nav thistab a:hover': {
    'color': '#199acb'
  },
  'im_tab_nav_no': {
    'display': 'none'
  },
  // 左边列表
  'webim_leftbar': {
    'width': [{ 'unit': 'px', 'value': 250 }],
    'height': [{ 'unit': 'px', 'value': 550 }],
    'background': '#fff',
    'float': 'left',
    'overflowY': 'scroll',
    'overflowX': 'hidden',
    'borderBottomLeftRadius': '3px'
  },
  // 消息列表
  'webim_leftbar_message': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'webim_leftbar_message li': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    // height: 40px;
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'webim_leftbar_message li:hover': {
    'background': '#f1f3f7',
    'cursor': 'default'
  },
  'webim_leftbar_message li#active': {
    'background': '#f1f3f7',
    'cursor': 'default'
  },
  // 好友头像
  'webim_portrait': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'webim_portrait img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'borderRadius': '50%'
  },
  'webim_info_img img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'borderRadius': '50%'
  },
  // 名称内容
  'webim_contact_info': {
    'width': [{ 'unit': 'px', 'value': 163 }],
    'float': 'left',
    'color': '#9fa4a6'
  },
  'webim_contact_info p': {
    'whiteSpace': 'nowrap',
    'wordBreak': 'keep-all',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'webim_contact_p': {
    'whiteSpace': 'nowrap',
    'wordBreak': 'keep-all',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'friend_name': {
    'whiteSpace': 'nowrap',
    'wordBreak': 'keep-all',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'ulexpmenu li ul li': {
    'whiteSpace': 'nowrap',
    'wordBreak': 'keep-all',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'ulexpmenu li divheader label': {
    'whiteSpace': 'nowrap',
    'wordBreak': 'keep-all',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'user_info_content dd': {
    'whiteSpace': 'nowrap',
    'wordBreak': 'keep-all',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'webim_contact_username': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'webim_contact_username spantitle': {
    'width': [{ 'unit': 'px', 'value': 113 }],
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#3d464a',
    'overflow': 'hidden'
  },
  'webim_contact_time': {
    'float': 'right'
  },
  'webim_contact_p': {
    'width': [{ 'unit': 'px', 'value': 130 }],
    'float': 'left'
  },
  // 未读消息提示
  'message_tips': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'position': 'absolute',
    'background': '#f74c31',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '30px'
  },
  'list_message_tips': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'background': '#f74c31',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '30px'
  },
  // 好友列表
  'webim_leftbar_message dl': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#ececec' }, { 'unit': 'string', 'value': 'solid' }]
  },
  'webim_leftbar_message dl:last-child': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'webim_leftbar_message dt': {
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#999',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'textTransform': 'capitalize'
  },
  'friend_name': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#3d464a',
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  // 点击按钮创建
  'btn_found': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 55 }],
    'lineHeight': [{ 'unit': 'px', 'value': 55 }]
  },
  'btn_found a': {
    'color': '#23b7e5'
  },
  // 组织架构
  'tree_li li': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'tree_li li:hover': {
    'background': 'none'
  },
  'menu li i': {
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 4 }],
    'color': '#333'
  },
  'menu no': {
    'display': 'none'
  },
  'ulexpmenu': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ulexpmenu li divheader': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'ulexpmenu li ul li': {
    'color': '#3d464a',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': '%H', 'value': NaN }]
  },
  'menu ol li': {
    'width': [{ 'unit': '%H', 'value': NaN }, { 'unit': '%H', 'value': NaN }, { 'unit': 'string', 'value': '!important' }]
  },
  'ulexpmenu li ul liselected': {
    'backgroundColor': '#fff'
  },
  'ulexpmenu li divheader label': {
    'background': 'no-repeat',
    'color': '#3d464a',
    // text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.8);
  },
  'ulexpmenu li divheader arrow': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 22 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'background': 'no-repeat center',
    'float': 'left'
  },
  'ulexpmenu li divheader arrowup': {
    'backgroundImage': 'url(../img/arrow_d.png)'
  },
  'ulexpmenu li divheader arrowdown': {
    'backgroundImage': 'url(../img/arrow_u.png)'
  },
  'ulexpmenu li menu': {
    'display': 'none'
  },
  // 鼠标滑过背景
  'ulexpmenu divheader:hover': {
    'background': '#f2f3f7',
    // Old browsers
    'cursor': 'default'
  },
  'ulexpmenu li ul li:not(selected):hover': {
    'background': '#f2f3f7',
    // Old browsers
    'cursor': 'default'
  },
  'ulexpmenu li ul li:not(selected):active': {
    'background': '#f2f3f7',
    // Old browsers
    'cursor': 'default'
  },
  // 右边内容块
  'webim_chatwindow': {
    'position': 'relative',
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': NaN }],
    'height': [{ 'unit': 'px', 'value': 550 }],
    'background': 'url(../img/webim_chatwindow_logo.png) no-repeat center #f9f9f9',
    'borderBottomRightRadius': '3px'
  },
  // 个人信息
  'webim_chatwindow_bg': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': '#f9f9f9',
    'position': 'absolute',
    'zIndex': '9',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'borderBottomRightRadius': '3px'
  },
  'webim_info_img': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'webim_info_box dl': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'float': 'left',
    'lineHeight': [{ 'unit': 'px', 'value': 33 }]
  },
  'webim_info_box dl:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'webim_info_box dl ddfont_size18': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'webim_info_box dl ddfont_size18 img': {
    'marginLeft': [{ 'unit': 'px', 'value': 3 }]
  },
  'webim_info_box dt': {
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'float': 'left',
    'textAlign': 'right',
    'color': '#888'
  },
  'webim_info_box dd': {
    'width': [{ 'unit': '%H', 'value': 0.57 }],
    'float': 'right',
    'textAlign': 'left',
    'color': '#333'
  },
  'btn_message': {
    'width': [{ 'unit': 'px', 'value': 138 }],
    'height': [{ 'unit': 'px', 'value': 36 }],
    'background': '#23b7e5',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#fff',
    'borderRadius': '3px',
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'cursor': 'pointer'
  },
  'btn_message:hover': {
    'background': '#1fa4ce'
  },
  // 群组成员
  'user_info_header': {
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#ececec' }, { 'unit': 'string', 'value': 'solid' }]
  },
  'user_info_header h3': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': 'normal'
  },
  'user_info_header h3 small': {
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'user_info_header h3 small i': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'user_info_header h3 small a': {
    'color': '#bfbfbf'
  },
  'user_info_header h3 small a:hover': {
    'color': '#199acb'
  },
  'user_info_content': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }],
    'height': [{ 'unit': 'px', 'value': 370 }],
    'overflowY': 'scroll',
    'marginTop': [{ 'unit': 'px', 'value': 22 }],
    'textAlign': 'justify'
  },
  'user_info_content dl': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'display': 'inline-block',
    'textAlign': 'center',
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 16 }],
    'cursor': 'pointer'
  },
  'user_info_content dl:hover': {
    'background': '#efefef'
  },
  'user_info_content dl:active': {
    'background': '#e6e6e6'
  },
  // .user_info_content dl:hover img{
	box-shadow:0 0 7px #9a9a9a;
}
  'user_info_content dt': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'user_info_content dt img': {
    'width': [{ 'unit': 'px', 'value': 60 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'borderRadius': '50%'
  },
  'user_info_content dd': {
    'color': '#888'
  },
  // 用户聊天窗口
  'icon_chat': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#3cbdee'
  }
});
