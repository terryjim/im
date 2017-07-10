import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Friend from './Friend'
/*import pinyin from 'pinyin'*/

class Friends extends Component {
   /* componentDidMount() {
        const { fetchFriends } = this.props
        fetchFriends();//从FriendList中传过来的action，不是redux中的dispatch
    }*/
    render() {
        const { friends, onFriendClick, hidden, selectedItem } = this.props
        return (
            <ul className="webim_leftbar_message im_tab_nav_no" style={{
                display: hidden ? 'none' : 'block'
            }}>
                <dl>
                    <dt>{/*<!--pinyin('')-->*/}</dt>
                    <dd>
                        {friends.map(friend =>
                            <Friend
                                key={friend.openId}
                                {...friend}
                                onFriendClick={() => onFriendClick(friend.openId)}   
                                selected={selectedItem==friend.openId}                           
                            />
                        )}
                    </dd>
                </dl>
                <div className="renovate" title="点击刷新"><i className="fa fa-refresh"></i></div>
            </ul>
        )
    }
}




export default Friends

