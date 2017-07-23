import React from 'react'
import { connect } from 'react-redux'
import { chgTopNav } from '../../actions'
import { clearMessages } from '../../actions/message'
let TopNav = ({ dispatch, selectTab, newMsgs }) =>
    (<div className="im_header">
        <input name="" type="text" className="im_header_seach" placeholder="搜索" />
        <ul className="im_tab_nav" id="im_tab_nav">
            <li title="消息列表" onClick={() => dispatch(chgTopNav(1))} className={selectTab === 1 ? "thistab" : ""}><i className="fa fa-comments"></i><span className="message_tips" style={{
                display: isNaN(newMsgs) || newMsgs === 0 ? 'none' : ''
            }}>{newMsgs}</span></li>
            <li title="好友列表" onClick={() => dispatch(chgTopNav(2))} className={selectTab === 2 ? "thistab" : ""}><i className="fa fa-user "></i></li>
            <li title="群组列表" onClick={() => dispatch(chgTopNav(3))} className={selectTab === 3 ? "thistab" : ""}><i className="fa fa-users"></i></li>
            <li title="组织架构" onClick={() => dispatch(chgTopNav(4))} className={selectTab === 4 ? "thistab" : ""}><i className="fa fa-share-alt"></i></li>
         <li title="清空消息" onClick={() => dispatch(clearMessages())} className={selectTab === 4 ? "thistab" : ""}><i className="fa fa-share-alt"></i></li>
        

        </ul>
    </div>)


const mapStateToProps = (state) => {
    let selectTab = state.topNav
    let newMsgs = 0;
    console.log(state.messages)
    if (state.messages != null && state.messages.length > 0) {
        state.messages.forEach(x => newMsgs += (x.newMsgs == null || isNaN(x.newMsgs)) ? 0 : x.newMsgs)
    }
    return { selectTab, newMsgs }
}


TopNav = connect(
    mapStateToProps
)(TopNav)


//TopNav = connect()(TopNav)
export default TopNav
