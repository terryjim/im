import React from 'react'
import { connect } from 'react-redux'
import { showIntro, fetchFriends } from '../../actions'
import Friends from './components/Friends'

const mapStateToProps = (state) => {
    let hidden = state.topNav !== 2 ? true : false
    return { friends: state.userInfo.filter(x=>state.friends.indexOf(x.openId)>=0), hidden, selectedItem: state.showFriend}
}
const mapDispatchToProps = {
    onFriendClick: showIntro,
    fetchFriends: fetchFriends
}

const FriendList = connect(
    mapStateToProps, mapDispatchToProps
)(Friends)


export default FriendList



