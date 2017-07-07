import React from 'react'
import { connect } from 'react-redux'
import { showGroupMember, fetchGroups,fetchGroupMember } from '../../actions'
import Groups from './components/Groups'

const mapStateToProps = (state) => {
    let hidden = state.topNav !== 3 ? true : false
    let members=state.groupMember
    return { groups: state.groups, hidden, selectedItem: state.showGroupMember }
}
const mapDispatchToProps = {
    onGroupClick: fetchGroupMember
}

const GroupList = connect(
    mapStateToProps, mapDispatchToProps
)(Groups)


export default GroupList


