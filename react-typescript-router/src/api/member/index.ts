import {members} from './mockData'
import { MemberEntity } from '../../model';
// 泛型
// MemberEntity[]为约束条件
const fetchMembers = ():Promise<MemberEntity[]> =>{
  return Promise.resolve(members);
}
export const memberAPI = {
  fetchMembers
}