import React from 'react'
import ReactDOM from 'react-dom';
import TopNav from './modules/topPanel/TopNav'
import LeftPanel from './modules/leftPanel/LeftPanel'
import Main from './modules/rightPanel/Main'

const App = () => (
  <div className="webim_chat">
    <TopNav />
    <LeftPanel />
    <Main />
  </div>)
export default App
