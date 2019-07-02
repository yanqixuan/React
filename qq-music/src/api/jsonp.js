import originalJsonp from 'jsonp';

const jsonp = (url,data,option) => {
  return new Promise((resolve,reject) => {
    originalJsonp(buildUrl(url,data),option,(err,res) => {
      if (!err) {
        resolve(res);
      }
      else {
        reject(err);
      }
    })
  })
}

// url  baidu.com
// data {a:1,b:2}
// build baidu.com?a=1&b=2

function buildUrl(url,data){
  let param = [];
  for(var k in data){
    param.push(`${k}=${encodeURIComponent(data[k])}`);  //编码    解码为decodeURIComponent
  }
  let paramStr = param.join('&');
  if(url.indexOf('?') === -1){
    url += "?" + paramStr
  } else {
    url += "&" + paramStr
  }
  return url
}
export default jsonp;