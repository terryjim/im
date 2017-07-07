import React from 'react'
import Intro from './Intro'
import Chat from './Chat'
import GroupMember from './GroupMember'
import { connect } from 'react-redux'
/*右侧主窗口，包含消息窗口及用户信息页面*/
let Main = ({ showMain }) => (
  <div className="webim_rightbar">   
    <div className="webim_chatwindow_bg"> 
      <Chat hidden={showMain !== 1} />
      <Intro hidden={showMain !== 2} />
      <GroupMember hidden={showMain !== 3} />   
      </div> 
  </div>
)

const mapStateToProps = (state) => {
  let showMain = state.showMain
  return { showMain }
}
Main = connect(
  mapStateToProps,
)(Main)
export default Main;

