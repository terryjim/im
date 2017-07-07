import React from 'react';
import { showMessage } from '../../actions'
import { connect } from 'react-redux'
//好友名片信息
let Intro = ({ dispatch, intro = {}, hidden }) => {
    if (intro.openId == null)
        return null
    else
        return (<div className="row webim_user_card m-t-xl" style={{
            display: hidden ? 'none' : ''
        }}>
            <div className="col-sm-12 clearfix text-center">
                <span className="width_57 pull-right">
                    <div className="webim_toux font_size18 m-b">
                        <div className="webim_info_img"><img src={intro.avatar} /></div>
                        {intro.name}&nbsp;<img src="img/man_user.png" />
                    </div>
                </span>
            </div>
            <div className="col-sm-12">
                <span className="text_gray width_40 text-right pull-left">公&nbsp;&nbsp;&nbsp;&nbsp;司</span>
                <span className="width_57 pull-right">{intro.Cards[0].companyName}</span>
            </div>
            <div className="col-sm-12">
                <span className="text_gray width_40 text-right pull-left">部&nbsp;&nbsp;&nbsp;&nbsp;门</span>
                <span className="width_57 pull-right">{intro.openId}</span>
            </div>
            <div className="col-sm-12">
                <span className="text_gray width_40 text-right pull-left">岗&nbsp;&nbsp;&nbsp;&nbsp;位</span>
                <span className="width_57 pull-right">{intro.Cards[0].title}</span>
            </div>
            <div className="col-sm-12">
                <span className="text_gray width_40 text-right pull-left">手机号</span>
                <span className="width_57 pull-right">{intro.mobile}</span>
            </div>
            <div className="col-sm-12 clearfix">
                <span className="text_gray width_40 text-right pull-left">邮&nbsp;&nbsp;&nbsp;&nbsp;箱</span>
                <span className="width_57 pull-right">{intro.email}</span>
            </div>
            <div className="col-sm-12">
                <span className="text_gray width_40 text-right pull-left">&nbsp;</span>
                <span className="width_57 pull-right btn-toggle m-t">
                    <a className="disabled" href="#"><i className="fa fa-angle-left"></i></a>
                    <a href="#"><i className="fa fa-angle-right"></i></a>
                </span>
            </div>
            <div className="col-sm-12">
                <span className="width_57 pull-right"><button className="btn_message m-t-lg" type="button" name="message" onClick={() => dispatch(showMessage(intro.openId))}>发消息</button></span>
            </div>
        </div>)
}
const mapStateToProps = (state) => {  
    let openId = state.showFriend
    let userInfo = state.userInfo
    //console.log(intros)
    var intro = userInfo.filter(x => x.openId === openId)
    //console.log(intro);
    if (intro != null) {
        intro = intro[0]
    }
    return { intro }
}


Intro = connect(
    mapStateToProps,
)(Intro)
export default Intro;
