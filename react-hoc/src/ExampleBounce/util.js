// 防抖  func wait    
export function debounce(func,wait){
  var result,timeout;
  return function(){
    //this
    //参数
    // var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      result = func.apply(this,args)
    }, wait);
    return result;
  }
}
// 可用于装饰的防抖
// 装饰器都是函数   修饰的是方法
export function decDebounce(wait){
  return function(target,key,descriptor){
    var callBack = descriptor.value;
    var fn = debounce(callBack,wait); //进行增强
    // 修饰方法时改变的是value属性
    descriptor.value = fn;//返回增强后的 
  }
}

// 修饰属性
export function decArrowDebounce(wait){
  return function(target,key,descriptor){
    // 拿到原来的    
    var callBack = descriptor.initializer && descriptor.initializer();
    var fn = debounce(callBack,wait);
    // 修饰属性时改变的是get方法  2种方法,改变原来的 || 返回一个新的
    return {
      configurable:true,
      get:function(){
        return fn;
      }
    }
  }
}

// hoc 高阶组件 装饰整个组件
// class
// 修饰类的
export function decDisplayName(displayname){
  return function (target){ //拿到修饰谁
    target.displayName = displayname;
  }
}