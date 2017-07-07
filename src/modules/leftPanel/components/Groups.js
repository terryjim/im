import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Group from './Group'

class Groups extends Component {
   
    render() {
        const { groups, onGroupClick, hidden, selectedItem } = this.props         
        return (
            <ul className="webim_leftbar_message im_tab_nav_no" style={{
                display: hidden ? 'none' : 'block'
            }}>
                <dl>
                    <dt>{/*<!--pinyin('')-->*/}</dt>
                    <dd>
                        {
                          groups==null?null:groups.map(group =>
                            <Group
                                key={group.openId}
                                {...group}
                                onGroupClick={() => onGroupClick(group.openId)}   
                                selected={selectedItem==group.openId}                           
                            />
                        )}
                    </dd>
                </dl>
            </ul>
        )
    }
}




export default Groups

