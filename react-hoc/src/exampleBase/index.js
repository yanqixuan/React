// defineProperty(obj,key,{
//  value:''
// })
// Object.defineProperty(Base,'add',{
//   value:()=>{

//   }
// })
// descriptor 拿到了add这个方法的 descriptor
// function log(target,name,descriptor){
//   const method = descriptor.value;
//   descriptor.value = function(...args){
//     console.log('log type: add')
//     return method(...args);
//   }
// }
function log(logType){
  return function (target,name,descriptor){
      const method = descriptor.value;
      descriptor.value = function(...args){
        console.log('log type: ' + logType)
        return method(...args);
      }
  }
}
// 修饰符 是一个函数
class Base {
  @log('add')
  add(a,b){
    // console.log('log type add:')
    return a + b;
  }
  @log('divide')
  divide(a,b){
    return a/b;
  }
}
// 加日志
// 装饰器
const base = new Base();
console.log('add',base.add(1,2));
console.log('divide',base.divide(4,2))
export default base;
