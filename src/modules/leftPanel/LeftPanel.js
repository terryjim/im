import React from 'react'
import MessageList from './MessageList'
import FriendList from './FriendList'
import GroupList from './GroupList'
import CorpList from './CorpList'
const LeftPanel = () =>
    (
        <div className="webim_leftbar" id="webim_leftbar">
            <MessageList /><FriendList /><GroupList /><CorpList/>
        </div>
    )

export default LeftPanel
