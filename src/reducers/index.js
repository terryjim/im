import { combineReducers } from 'redux'
import topNav from './topNav'
import messages from './messages'
import showMain from './showMain'
import friends from './friends'
import groups from './groups'

import showMessage from './showMessage'
import showFriend from './showFriend'
import showGroupMember from './showGroupMember'
import userInfo from './userInfo'
import corps from './corps'
import initialise from './initialise'
import loading from './loading'
export default combineReducers({
    topNav, showMain, messages, friends,groups,showMessage,showFriend,showGroupMember,userInfo,corps,initialise,loading
})

