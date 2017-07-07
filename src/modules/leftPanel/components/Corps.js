import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TreeView from '../../../utils/react-treeview';
/*import pinyin from 'pinyin'*/
/*const dataSource = [
    {
        type: '蓝筹科技',
        collapsed: true,
        people: [
            { name: '研发部', age: 29, sex: 'male', role: 'coder', collapsed: true },
            { name: '市场部', age: 27, sex: 'female', role: 'ocamler', collapsed: true },
        ],
    },
    {
        type: '美瑞科技',
        collapsed: true,
        people: [
            { name: '综合部', age: 39, sex: 'male', role: 'boss', collapsed: true },
        ],
    },
];
*/

/*const sample = [
    { companyId: 1123, companyName: '蓝筹科技', collapsed: true, deps: [{ name: '研发', people: [{ name: '刘勇', openId: '0000000000000b64' }, { name: '刘勇2', openId: '0000000000000b70' }] }, { name: '市场部', people: [{ name: '刘勇3', openId: '0000000000000b7b' }, { name: '刘勇4', openId: '0000000000000b70' }] }] },
    { companyId: 1124, companyName: '中瑞恒德', collapsed: true, deps: [{ name: '人事', people: [{ name: '金飚', openId: '0000000000000b70' }, { name: '张璐', openId: '0000000000000b78' }] }] }
]

*/

class Corps extends Component {
    componentWillMount() {
        //如果没有组织架构信息则更新数据
        console.log("如果没有组织架构信息则更新数据")
        console.log(this.props.fetchCorps)
        if (this.props.corps == null || this.props.corps.length === 0) {
             console.log("111111111111111")
            this.props.fetchCorps()
             console.log("2222222222222222222")
        }        
    }
    render() {
        const { hidden, corps, onUserClick } = this.props
        console.log(corps)
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
            </ul>
        );
    }
}




export default Corps

