import { combineReducers } from 'redux';  //组合reducer
import * as Actiontype from './actionTypes';

const initalState = {
  showStatus:false,
  song:{},//播放的歌
  songs:[]  //播放列表
}

// 每一个状态的修改都需要一个reducer  reducer是纯函数
/**
 * dispatch
 * {type:'SHOW_PLAYER',showStatus:true}
 * {type:'SHOW_PLAYER',showStatus:false}
 */
function showStatus(showStatus = initalState.showStatus,action){
  switch (action.type) {
    case Actiontype.SHOW_PLAYER :
      return action.showStatus;
    default:
      return showStatus
  }
}

// 改变当前歌曲
/**
 * {type:'CHANGE_SONG'，song:{}}
 * type
 * payload
 */
function song (song = initalState.song,action) {
  switch (action.type) {
    case Actiontype.CHANGE_SONG:
      return action.song;
    default:
      return song
  }
}

export default combineReducers({
  showStatus,
  song
})