import { memberAPI } from '../../../api/member';
import { MemberEntity } from '../../../model'

export const fetchMembersAction = () => (dispatch) =>{
  // ajax api
  memberAPI.fetchMembers().then(members => {
    dispatch(fetchMembersCompleted(members)) //下一个动作
  })
}
// actions 返回一个type对象，就会去交给reducer重新计算
// 交给reduce 数据更新    reducer = state + mutations
const fetchMembersCompleted = (members:MemberEntity[]) => ({
  type:'FETCH_MEMBER_COMPLETED',  //reduce改变的状态的类型
  payload:members
})