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
  'textarea': {
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
  'a:focus': {
    'textDecoration': 'none'
  },
  // MARGINS & PADDINGS
  'p-xxs': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'p-xs': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'p-sm': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'p-m': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'p-md': {
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }]
  },
  'p-lg': {
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  'p-xl': {
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }]
  },
  'm-xxs': {
    'margin': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }]
  },
  'm-xs': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'm-sm': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'm': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'm-md': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'm-lg': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  'm-xl': {
    'margin': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }]
  },
  'm-n': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'm-l-none': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'm-l-xs': {
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'm-l-sm': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'm-l': {
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'm-l-md': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'm-l-lg': {
    'marginLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'm-l-xl': {
    'marginLeft': [{ 'unit': 'px', 'value': 40 }]
  },
  'm-l-n-xxs': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'm-l-n-xs': {
    'marginLeft': [{ 'unit': 'px', 'value': -5 }]
  },
  'm-l-n-sm': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  'm-l-n': {
    'marginLeft': [{ 'unit': 'px', 'value': -15 }]
  },
  'm-l-n-md': {
    'marginLeft': [{ 'unit': 'px', 'value': -20 }]
  },
  'm-l-n-lg': {
    'marginLeft': [{ 'unit': 'px', 'value': -30 }]
  },
  'm-l-n-xl': {
    'marginLeft': [{ 'unit': 'px', 'value': -40 }]
  },
  'm-t-none': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'm-t-xxs': {
    'marginTop': [{ 'unit': 'px', 'value': 1 }]
  },
  'm-t-xs': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'm-t-sm': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'm-t': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'm-t-md': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'm-t-lg': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'm-t-xl': {
    'marginTop': [{ 'unit': 'px', 'value': 40 }]
  },
  'm-t-n-xxs': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }]
  },
  'm-t-n-xs': {
    'marginTop': [{ 'unit': 'px', 'value': -5 }]
  },
  'm-t-n-sm': {
    'marginTop': [{ 'unit': 'px', 'value': -10 }]
  },
  'm-t-n': {
    'marginTop': [{ 'unit': 'px', 'value': -15 }]
  },
  'm-t-n-md': {
    'marginTop': [{ 'unit': 'px', 'value': -20 }]
  },
  'm-t-n-lg': {
    'marginTop': [{ 'unit': 'px', 'value': -30 }]
  },
  'm-t-n-xl': {
    'marginTop': [{ 'unit': 'px', 'value': -40 }]
  },
  'm-r-none': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'm-r-xxs': {
    'marginRight': [{ 'unit': 'px', 'value': 1 }]
  },
  'm-r-xs': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'm-r-sm': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'm-r': {
    'marginRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'm-r-md': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'm-r-lg': {
    'marginRight': [{ 'unit': 'px', 'value': 30 }]
  },
  'm-r-xl': {
    'marginRight': [{ 'unit': 'px', 'value': 40 }]
  },
  'm-r-n-xxs': {
    'marginRight': [{ 'unit': 'px', 'value': -1 }]
  },
  'm-r-n-xs': {
    'marginRight': [{ 'unit': 'px', 'value': -5 }]
  },
  'm-r-n-sm': {
    'marginRight': [{ 'unit': 'px', 'value': -10 }]
  },
  'm-r-n': {
    'marginRight': [{ 'unit': 'px', 'value': -15 }]
  },
  'm-r-n-md': {
    'marginRight': [{ 'unit': 'px', 'value': -20 }]
  },
  'm-r-n-lg': {
    'marginRight': [{ 'unit': 'px', 'value': -30 }]
  },
  'm-r-n-xl': {
    'marginRight': [{ 'unit': 'px', 'value': -40 }]
  },
  'm-b-none': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'm-b-xxs': {
    'marginBottom': [{ 'unit': 'px', 'value': 1 }]
  },
  'm-b-xs': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'm-b-sm': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'm-b': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'm-b-md': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'm-b-lg': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'm-b-xl': {
    'marginBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  'm-b-n-xxs': {
    'marginBottom': [{ 'unit': 'px', 'value': -1 }]
  },
  'm-b-n-xs': {
    'marginBottom': [{ 'unit': 'px', 'value': -5 }]
  },
  'm-b-n-sm': {
    'marginBottom': [{ 'unit': 'px', 'value': -10 }]
  },
  'm-b-n': {
    'marginBottom': [{ 'unit': 'px', 'value': -15 }]
  },
  'm-b-n-md': {
    'marginBottom': [{ 'unit': 'px', 'value': -20 }]
  },
  'm-b-n-lg': {
    'marginBottom': [{ 'unit': 'px', 'value': -30 }]
  },
  'm-b-n-xl': {
    'marginBottom': [{ 'unit': 'px', 'value': -40 }]
  },
  'space-15': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'space-20': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'space-25': {
    'margin': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }]
  },
  'space-30': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'text_gray': {
    'color': '#B9B9B9'
  },
  'webim_chat': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'float': 'left',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': '#ccc' }],
    'minWidth': [{ 'unit': 'px', 'value': 700 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
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
    'width': [{ 'unit': 'px', 'value': 213 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'background': 'url(../img/icon-search.png) no-repeat 93% center #f1f3f7',
    'borderRadius': '15px',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'margin': [{ 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': 45 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
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
    'width': [{ 'unit': 'px', 'value': 251 }],
    'height': [{ 'unit': 'px', 'value': 550 }],
    'background': '#f1f1f1',
    'float': 'left',
    'borderBottomLeftRadius': '3px',
    'position': 'relative',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#ececec' }, { 'unit': 'string', 'value': 'solid' }]
  },
  // 消息列表
  'webim_leftbar_message': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflowX': 'hidden',
    'overflowY': 'auto'
  },
  'webim_leftbar_message li': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'webim_leftbar_message li:hover': {
    'background': '#e2e2e2',
    'cursor': 'pointer'
  },
  'webim_leftbar_message liactive': {
    'background': '#e2e2e2',
    'cursor': 'pointer'
  },
  'webim_leftbar_message p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // 好友头像
  'webim_portrait': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'float': 'left'
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
    'width': [{ 'unit': '%H', 'value': NaN }],
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
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
  'msg_bubble_name': {
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
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'webim_contact_p img': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
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
  'webim_leftbar_message dt': {
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#999',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'textTransform': 'capitalize',
    'fontWeight': 'normal'
  },
  'friend_name': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#3d464a',
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  // 刷新按钮
  'renovate': {
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': 'normal',
    'textAlign': 'center',
    'borderRadius': '50%',
    'background': '#199acb',
    'color': '#fff',
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 10 }],
    'right': [{ 'unit': 'px', 'value': 25 }],
    'zIndex': '20',
    'opacity': '0.5',
    // 该属性支持firefox, Safari和 Opera
    'filter': 'alpha(opacity=50)',
    // 这个是为IE6设的
    'MozOpacity': '0.5',
    // 支持老版本的Mozilla
    'KhtmlOpacity': '0.5',
    // 支持老版本的Safari
    'cursor': 'pointer'
  },
  'renovate:hover': {
    'background': '#1687b2',
    'opacity': '1',
    // 该属性支持firefox, Safari和 Opera
    'filter': 'alpha(opacity=100)',
    // 这个是为IE6设的
    'MozOpacity': '1',
    // 支持老版本的Mozilla
    'KhtmlOpacity': '1',
    // 支持老版本的Safari
  },
  // 组织架构 树结构
  'tree_li li': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'tree_li li:hover': {
    'background': 'none'
  },
  'menu': {
    'display': 'inline !important'
  },
  'menu li i': {
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 4 }],
    'color': '#333'
  },
  'ulexpmenu': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'menu ol li': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ulexpmenu li ul li': {
    'color': '#3d464a',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 25 }]
  },
  'ulexpmenu li divheader': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'background': 'url(../img/arrow_u.png) no-repeat 10px center',
    'textIndent': '25px'
  },
  'ulexpmenu li divheaderactive': {
    'background': 'url(../img/arrow_d.png) no-repeat 10px center'
  },
  'ulexpmenu li divheaderactive:hover': {
    'background': 'url(../img/arrow_d.png) no-repeat 10px center #e2e2e2'
  },
  'ulexpmenu li ul > li': {
    'color': '#3d464a',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }]
  },
  // 组织架构 树结构
  'tree-view_item:hover': {
    'background': '#e2e2e2 !important'
  },
  'tree-view_children info:hover': {
    'background': '#e2e2e2 !important'
  },
  // 鼠标滑过背景
  'ulexpmenu divheader:hover': {
    'background': 'url(../img/arrow_u.png) no-repeat 10px center #e2e2e2',
    // Old browsers
  },
  'ulexpmenu li ul li:hover': {
    'background': '#e2e2e2',
    // Old browsers
  },
  'ulexpmenu li ul li:active': {
    'background': '#e2e2e2',
    // Old browsers
  },
  // 右边内容块
  'webim_rightbar': {
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
  'webim_chatwindow_bg row': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'webim_user_card': {
    'lineHeight': [{ 'unit': 'px', 'value': 33 }]
  },
  'webim_toux': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'textAlign': 'center'
  },
  'webim_info_img': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'width_40': {
    'width': [{ 'unit': '%H', 'value': 0.4 }]
  },
  'width_57': {
    'width': [{ 'unit': '%H', 'value': 0.57 }]
  },
  'text_gray': {
    'color': '#B9B9B9'
  },
  'font_size18': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'btn-toggle a': {
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }],
    'textAlign': 'center',
    'color': '#a4a4a4',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#a4a4a4' }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '3px',
    'display': 'inline-block'
  },
  'btn-toggle a:hover': {
    'color': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#23b7e5' }, { 'unit': 'string', 'value': 'solid' }],
    'background': '#23b7e5'
  },
  'btn-toggle adisabled': {
    'pointerEvents': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#d5d5d5' }, { 'unit': 'string', 'value': 'solid' }],
    'color': '#d5d5d5'
  },
  'btn_message': {
    'width': [{ 'unit': 'px', 'value': 138 }],
    'height': [{ 'unit': 'px', 'value': 36 }],
    'background': '#23b7e5',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#fff',
    'borderRadius': '3px',
    'cursor': 'pointer'
  },
  'btn_message:hover': {
    'background': '#1fa4ce'
  },
  // 群组成员
  'user_info_header': {
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
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
    'overflowY': 'auto',
    'marginTop': [{ 'unit': 'px', 'value': 22 }],
    'textAlign': 'justify',
    // text-align-last:justify;
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
  },
  'webim_chatwindow_msg': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '1',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 30 }],
    'bottom': [{ 'unit': 'px', 'value': 160 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'overflowX': 'hidden',
    'overflowY': 'auto',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  // 正在聊天用户列表
  'msg_bubble_list': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 18 }]
  },
  'msg_bubble_name': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'marginBottom': [{ 'unit': 'px', 'value': 3 }],
    'color': '#919191'
  },
  'bubble_cont': {
    'position': 'relative',
    'maxWidth': [{ 'unit': '%H', 'value': NaN }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'marginTop': [{ 'unit': 'px', 'value': 1 }],
    'borderRadius': '5px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.05)' }],
    'display': 'inline-block',
    'background': '#EAEAEA',
    'textAlign': 'left'
  },
  'bubble_arrow': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 6 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'backgroundImage': 'url(../img/talk_recordtextbg.png)',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'left 10px'
  },
  'bubble_arrowrotate': {
    'float': 'right',
    'marginRight': [{ 'unit': 'px', 'value': 4 }],
    'WebkitTransform': 'rotate(-113deg)',
    'MozTransform': 'rotate(-113deg)',
    'OTransform': 'rotate(-113deg)',
    'transform': 'rotate(-113deg)',
    // 改变元素角度
  },
  'font_size12': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'webim-send-wrapper': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 110 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'background': '#fff'
  },
  'webim-chatwindow-options': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ececec' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '1',
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 130 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  'webim-chatwindow-options a': {
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 4 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#949fb5'
  },
  'webim-chatwindow-options a:hover': {
    'textDecoration': 'none',
    'background': '#eaeaea'
  },
  'webim-chatwindow-options a:focus': {
    'textDecoration': 'none',
    'background': '#eaeaea'
  },
  'webim_chatwindow textarea': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 50 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box',
    'height': [{ 'unit': 'px', 'value': 80 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'background': '#fff',
    'resize': 'none'
  },
  'webim-send-btn': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 10 }],
    'right': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'cursor': 'pointer',
    'background': '#f5f5f5',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#e5e5e5' }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '3px'
  },
  'webim-send-btn:hover': {
    'background': '#199acb',
    'color': '#fff'
  },
  // 聊天表情包
  'face-wrapper': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '#868686' }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 160 }],
    'zIndex': '10',
    'display': 'none'
  },
  'face-wrapper h5': {
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'face-container': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'face-wrapper h5': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'face-container': {
    'height': [{ 'unit': 'px', 'value': 213 }],
    'overflowY': 'auto',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'face-container li': {
    'float': 'left',
    'listStyle': 'none'
  },
  'face-container a': {
    'width': [{ 'unit': 'px', 'value': 35 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'float': 'left',
    'textAlign': 'center'
  },
  'face-container a:hover': {
    'background': '#f3f3f4'
  },
  'face-footer': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'float': 'left',
    'background': '#f3f3f4',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'face-footer li': {
    'float': 'left'
  },
  'face-footer a': {
    'width': [{ 'unit': 'px', 'value': 60 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'float': 'left',
    'textAlign': 'center'
  },
  'face-footer a:hover': {
    'background': '#e1e1e2'
  },
  'face-footer aactive': {
    'background': '#fff'
  },
  // 正在加载数据 样式
  'loading': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.4 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'loading img': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'loading p': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#a8a8a8'
  }
});
