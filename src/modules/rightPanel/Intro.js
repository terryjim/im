import React from 'react';
import { showMessage } from '../../actions/message'
import { connect } from 'react-redux'
//好友名片信息
let Intro = ({ dispatch, intro = {}, hidden }) => {
    if (intro.openId == null)
        return null
    else{
    let currentCard=0 //当前名片索引
        return (<div className="row webim_user_card m-t-xl" style={{
            display: hidden ? 'none' : ''
        }}>
            <div className="col-sm-12 clearfix text-center">
                <span className="width_57 pull-right">
                    <div className="webim_toux font_size18 m-b">
                        <div className="webim_info_img"><img src={window.WebIM.config.getAvatarByOpenId + intro.openId} /></div>
                        {intro.name}&nbsp;<img src="img/man_user.png" />
                    </div>
                </span>
            </div>
            <div className="col-sm-12">
                <span className="text_gray width_40 text-right pull-left">公&nbsp;&nbsp;&nbsp;&nbsp;司</span>
                <span className="width_57 pull-right" ref={x => {
                            this.companyName = x
                        }}>{intro.cards[0].companyName}</span>
            </div>
            {/*<div className="col-sm-12">
                <span className="text_gray width_40 text-right pull-left">部&nbsp;&nbsp;&nbsp;&nbsp;门</span>
                <span className="width_57 pull-right">{intro.openId}</span>
            </div>*/}
            <div className="col-sm-12">
                <span className="text_gray width_40 text-right pull-left">岗&nbsp;&nbsp;&nbsp;&nbsp;位</span>
                <span className="width_57 pull-right" ref={x => {
                            this.depTitle = x
                        }}>{intro.cards[0].title}</span>
            </div>
            <div className="col-sm-12">
                <span className="text_gray width_40 text-right pull-left">手机号</span>
                <span className="width_57 pull-right">{intro.mobile}</span>
            </div>
            <div className="col-sm-12 clearfix">
                <span className="text_gray width_40 text-right pull-left">邮&nbsp;&nbsp;&nbsp;&nbsp;箱</span>
                <span className="width_57 pull-right">{intro.email}</span>
            </div>
            {
                intro.cards.length > 1 ?
                    <div className="col-sm-12">
                        <span className="text_gray width_40 text-right pull-left">&nbsp;</span>
                        <span className="width_57 pull-right btn-toggle m-t">
                            <a href="#" onClick={()=>{currentCard=currentCard>0?currentCard-1:intro.cards.length-1;this.depTitle.innerHTML=intro.cards[currentCard].title;this.companyName.innerHTML=intro.cards[currentCard].companyName;}}><i className="fa fa-angle-left"></i></a>
                            <a href="#" onClick={()=>{currentCard=currentCard<intro.cards.length-1?currentCard+1:0;this.depTitle.innerHTML=intro.cards[currentCard].title;this.companyName.innerHTML=intro.cards[currentCard].companyName;}}><i className="fa fa-angle-right"></i></a>
                        </span>
                    </div>
                    : ''}
            <div className="col-sm-12">
                <span className="width_57 pull-right"><button className="btn_message m-t-lg" type="button" name="message" onClick={() => dispatch(showMessage({ openId: intro.openId, userName: intro.name }))}>发消息</button></span>
            </div>
        </div>)
    }
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
