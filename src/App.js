import React, { Component } from 'react'
import TopNav from './modules/topPanel/TopNav'
import LeftPanel from './modules/leftPanel/LeftPanel'
import Main from './modules/rightPanel/Main'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap';
class App extends Component {
   constructor(props) {
        super(props)
        this.state={
          clearMsg:false
        }
        this.onShowModal=this.onShowModal.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.handleCancel=this.handleCancel.bind(this)
    }
    onShowModal=()=>{
      alert(1)
      console.log(this.state)
      this.state.clearMsg=true
    }
    handleDelete=()=>{
      this.state.clearMsg=false
    }
    handleCancel=()=>{
      this.state.clearMsg=false
    }
  render() {
    if (this.props.initialised){
      console.log(this.onShowModal);
      return (
        <div className="webim_chat">
          <TopNav    onShowModal={()=>this.onShowModal()}/>
          <LeftPanel />
          <Main />
         {this.state.clearMsg}
         ddddd
          {this.state.clearMsg?
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>清除数据</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              本操作将删除本地消息记录，删除后将无法恢复，是否继续？
      </Modal.Body>

            <Modal.Footer>
              <Button>确定</Button>
              <Button bsStyle="primary">取消</Button>
            </Modal.Footer>

          </Modal.Dialog>
          :''}
        </div>)
    }
    else
      return (<div className="loading">
        <img src="./img/loading.gif" />
        <p>正在更新数据，请稍后（如长时间没反应，请刷新整个页面）...</p>
      </div>)
  }
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