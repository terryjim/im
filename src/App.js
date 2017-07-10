import React from 'react'
import ReactDOM from 'react-dom';
import TopNav from './modules/topPanel/TopNav'
import LeftPanel from './modules/leftPanel/LeftPanel'
import Main from './modules/rightPanel/Main'
import { connect } from 'react-redux'
let App = ({initialised}) => {
  if (initialised)
    return (
      <div className="webim_chat">
        <TopNav />
        <LeftPanel />
        <Main />
      </div>)
  else
    return <div>数据加载中，请稍后……</div>
}


const mapStateToProps = (state) => {
  let initialise = state.initialise
  console.log(initialise)
  return { initialised: initialise.friends && initialise.corps && initialise.groups }
}


App = connect(
  mapStateToProps,
)(App)
export default App