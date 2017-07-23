import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TreeView from '../../../utils/react-treeview';
/*import pinyin from 'pinyin'*/

/*const sample = [
    { companyId: 1123, companyName: '蓝筹科技', collapsed: true, deps: [{ name: '研发', users: [{ name: '刘勇', openId: '0000000000000b64' }, { name: '刘勇2', openId: '0000000000000b70' }] }, { name: '市场部', users: [{ name: '刘勇3', openId: '0000000000000b7b' }, { name: '刘勇4', openId: '0000000000000b70' }] }] },
    { companyId: 1124, companyName: '中瑞恒德', collapsed: true, deps: [{ name: '人事', users: [{ name: '金飚', openId: '0000000000000b70' }, { name: '张璐', openId: '0000000000000b78' }] }] }
]

*/
class Corps extends Component {
  /*  componentWillMount() {
        //如果没有组织架构信息则更新数据
        console.log("如果没有组织架构信息则更新数据")
        if (this.props.corps == null || this.props.corps.length === 0) {
            this.props.fetchCorps()
        }
    }*/
    render() {
        const { hidden, corps, onUserClick,loading } = this.props        
        console.log(corps)
         if (loading)
            return (<div className="loading">
                <img src="../../../img/loading.gif" />
                <p>正在更新数据，请稍后...</p>
            </div>)
        else
        return (
            <ul className="webim_leftbar_message im_tab_nav_no expmenu tree_li" style={{
                display: hidden ? 'none' : 'block'
            }}>
                {corps.map((node, i) => {
                    const companyName = node.companyName;
                    const label = <span className="header active">{companyName}</span>;
                    return (
                        <TreeView key={node.companyId} nodeLabel={label} defaultCollapsed={true}>
                            {node.deps.map((dept, i) => {
                                const label2 = <span className="header active">{dept.name}</span>;
                                return (
                                    <TreeView nodeLabel={label2} key={label2 + i} defaultCollapsed={true}>
                                        {
                                            dept.users.map((people, i) => {
                                                return [<div className="info" key='people.openId+i' onClick={() => onUserClick(people.openId)}><img src={window.WebIM.config.getAvatarByOpenId + people.openId} />{people.name}</div>]
                                            })
                                        }
                                        {/* <div className="info"><img src='http://ucapi.s-plus.cn/ucenter/portrait.php?openid=0000000000000b64'/>张三</div>
                    <div className="info"><img src='http://ucapi.s-plus.cn/ucenter/portrait.php?openid=0000000000000b64'/>李四</div>
                    <div className="info"><img src='http://ucapi.s-plus.cn/ucenter/portrait.php?openid=0000000000000b64'/>王五</div>
                 */} </TreeView>
                                );
                            })}
                        </TreeView>
                    );
                })}
                 <div className="renovate" title="点击刷新" onClick={()=>this.props.fetchCorps(window.WebIM.config.userCorps)}><i className="fa fa-refresh"></i></div>
            </ul>
        );
    }
}




export default Corps

