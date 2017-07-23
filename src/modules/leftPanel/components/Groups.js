import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Group from './Group'

class Groups extends Component {

    render() {
        const { groups, onGroupClick, hidden, selectedItem, loading } = this.props
        console.log(groups)
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
                            {
                                groups == null ? null : groups.map(group =>
                                    <Group
                                        key={group.openId}
                                        {...group}
                                        onGroupClick={() => onGroupClick(group.openId)}
                                        selected={selectedItem == group.openId}
                                    />
                                )}
                        </dd>
                    </dl>
                    <div className="renovate" title="点击刷新" onClick={this.props.fetchGroups}><i className="fa fa-refresh"></i></div>
                </ul>
            )
    }
}


/*
let App = ({initialised}) => {
  if (initialised)
    return (
      <div className="webim_chat">
        <TopNav />
        <LeftPanel />
        <Main />
      </div>)
  else
    return (<div className="loading">
        <img src="./img/loading.gif"/>
        <p>正在更新数据，请稍后...</p>
	</div>)
}


const mapStateToProps = (state) => {
  let initialise = state.initialise
  console.log(initialise)
  return { initialised: initialise.friends && initialise.corps && initialise.groups }
}


App = connect(
  mapStateToProps,
)(App)*/




export default Groups

