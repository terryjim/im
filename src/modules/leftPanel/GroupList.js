import React from 'react'
import { connect } from 'react-redux'
import { showGroupMember, fetchGroups,fetchGroupMember } from '../../actions/group'
import Groups from './components/Groups'

const mapStateToProps = (state) => {
    let hidden = state.topNav !== 3 ? true : false
    //let members=state.groups.members
    return { groups: state.groups, hidden, selectedItem: state.showGroupMember }
}
const mapDispatchToProps = {
    onGroupClick: showGroupMember
}

const GroupList = connect(
    mapStateToProps, mapDispatchToProps
)(Groups)


export default GroupList


