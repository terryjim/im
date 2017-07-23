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
        const { friends, onFriendClick, hidden, selectedItem,loading } = this.props
         if (loading)
            return (<div className="loading">
                <img src="../../../img/loading.gif" />
                <p>正在更新数据，请稍后...</p>
            </div>)
        else
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
                <div className="renovate" title="点击刷新" onClick={this.props.fetchFriends}><i className="fa fa-refresh"></i></div>
            </ul>
        )
    }
}




export default Friends

