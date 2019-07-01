// state
import { combineReducers } from 'redux';
import { MemberEntity } from '../model';
import { membersReducer } from './members';

export interface State{
  //限定类型
  members: MemberEntity[]
}

export const state = combineReducers<State>({
  members: membersReducer //其中一个状态

})