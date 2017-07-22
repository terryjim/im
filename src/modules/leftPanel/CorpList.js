import React from 'react'
import { connect } from 'react-redux'
import { showIntro} from '../../actions'
import Corps from './components/Corps'
import {fetchCorps} from '../../actions/corp' 

const mapStateToProps = (state) => {
    let hidden = state.topNav !== 4 ? true : false
    return { corps: state.corps,hidden}
}
const mapDispatchToProps = {
    onUserClick: showIntro,
    fetchCorps: fetchCorps
}

const CorpList = connect(
    mapStateToProps, mapDispatchToProps
)(Corps)


export default CorpList



