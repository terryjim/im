import React from 'react'
import { connect } from 'react-redux'
import { showIntro} from '../../actions'
import {fetchFriends } from '../../actions/friend'
import Friends from './components/Friends'

const mapStateToProps = (state) => {
    let hidden = state.topNav !== 2 ? true : false
    return { friends: state.userInfo.filter(x=>state.friends.indexOf(x.openId)>=0), hidden, selectedItem: state.showFriend,loading:state.loading===1 }
}
const mapDispatchToProps = {
    onFriendClick: showIntro,
    fetchFriends: fetchFriends
}

const FriendList = connect(
    mapStateToProps, mapDispatchToProps
)(Friends)


export default FriendList



