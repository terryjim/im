import React, { Component } from 'react';
import { fetchGroupMember, showMessage } from '../../actions'
import { connect } from 'react-redux'
//群组成员名片
class GroupMember extends Component {
    render() {
        const { showMessage, openId, groupMember, groupName, hidden } = this.props
        if (openId == null || groupMember == null)
            return null
        else
            return (
                <div className="group_user" style={{
                    display: hidden ? 'none' : ''
                }}>
                    <div className="user_info_header">
                        <h3>{groupName}<small><a href="#"><i className="fa fa-user-plus"></i>{/*邀请成员*/}</a></small></h3>
                    </div>
                    <div className="user_info_content">
                        {
                            groupMember.map(child => {
                                return (

                                    <dl>
                                        <dt><img src={child.avatar} /></dt>
                                        <dd>{child.name}</dd>
                                        <dd hidden='none'>child.openid</dd>
                                    </dl>
                                )
                            }
                            )
                        }
                    </div>
                    <div className="text-center"><button className="btn_message m-t-lg" type="button" name="message" onClick={() => showMessage(openId)}>发消息</button></div>
                </div>

            )
    }
}

const mapStateToProps = (state) => {
    let openId = state.showGroupMember
    let groups = state.groups.filter(x => x.openId === openId)
    let groupMember = []
    let groupName = ''
    let userInfo=state.userInfo
    if (groups != null && groups[0] != null) {
        groupMember=userInfo.filter(x=>)
        groupMember = groups[0].members
        groupName = groups[0].name
    }
    return { openId, groupMember, groupName }
}

const mapDispatchToProps = {
    fetchGroupMember: fetchGroupMember,
    showMessage: showMessage
}



GroupMember = connect(
    mapStateToProps, mapDispatchToProps
)(GroupMember)
export default GroupMember;
