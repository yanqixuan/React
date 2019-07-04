import React, { Component } from 'react'
import { connect } from 'react-redux';
import Album from '../components/album/Album'
import { changeSong } from '../redux/action'
/**
 * 返回的当作props
 * container component
 * pure component
 */
// 从redux获取数据
const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentSong: (song) => {
      dispatch(changeSong(song))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
// export default Album
