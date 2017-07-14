import React, { Component } from 'react';
import { showMessage } from '../../actions/message'
import { fetchGroupMember } from '../../actions/group'
import { connect } from 'react-redux'
//群组成员名片
class GroupMember extends Component {
    /* shouldComponentUpdate() {       
         if (this.props.openId == null)
             return false
             return true
     }*/
 /*   componentDidUpdate() {
        //如果没有群组人员信息则更新数据
        console.log("没有群组人员信息则更新数据")
        console.log(this.props.fetchGroupMember)
        if (this.props.openId == null || this.props.openId === 0)
            return null
        if (this.props.groupMember == null || this.props.groupMember.length === 0) {
            this.props.fetchGroupMember(this.props.openId)
        }
    }*/
    render() {
        const { showMessage, openId, groupMember, groupName, hidden,avatar } = this.props
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
                                        <dt><img src={window.WebIM.config.getAvatarByOpenId+child.openId} /></dt>
                                        <dd>{child.name}</dd>
                                        <dd hidden='none'>child.openid</dd>
                                    </dl>
                                )
                            }
                            )
                        }
                    </div>
                    <div className="text-center"><button className="btn_message m-t-lg" type="button" name="message" onClick={() => showMessage({openId,isGroup:1})}>发消息</button></div>
                </div>

            )
    }
}

const mapStateToProps = (state) => {
    let openId = state.showGroupMember
    let groups = state.groups.filter(x => x.openId === openId)
    let groupMember = []
    let groupName = ''
    let avatar=''
    let userInfo = state.userInfo
    let userOpenIds = userInfo.map(x => x.openId)   //所有用户的openId数组，查询用户所在位置用
    
    if (groups != null && groups[0] != null) {
        avatar=groups[0].avatar
        groupName = groups[0].name
        if (groups[0].members != null)
            groupMember = groups[0].members.map(x => {
                let user = userInfo[userOpenIds.indexOf(x)]
                return { name: user.name, avatar: user.avatar, openId: x }
            })
    }


    //alert(openId)
    console.log("000000000000000")
    console.log(groups)
    console.log(groupMember)
    return { openId, groupMember, groupName,avatar }
}

const mapDispatchToProps = {
    fetchGroupMember: fetchGroupMember,
    showMessage: showMessage
}



GroupMember = connect(
    mapStateToProps, mapDispatchToProps
)(GroupMember)
export default GroupMember;
