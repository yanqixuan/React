// 报错的类型  校验表单数据
import { FieldValidationResult } from 'lc-form-validation';
export interface MemberErrors {
  login: FieldValidationResult;
}