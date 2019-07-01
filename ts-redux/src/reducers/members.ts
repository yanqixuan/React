import { MemberEntity } from "../model";

// 状态的计算，reduce 纯函数 返回当前状态
// state,初始值。  state:MemberEntity[] = []  目前只有一个状态,对state的类型约束
export const membersReducer = (state:MemberEntity[] = [],action) => {
  switch(action.type){  //判断action的状态
    case 'FETCH_MEMBER_COMPLETED' :
      return action.payload
  }
  return state;
}