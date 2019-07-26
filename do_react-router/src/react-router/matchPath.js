import pathToRegexp from 'path-to-regexp';  //正则包
function compilePath(path, options) {
  const regexp = pathToRegexp(path, [], options);
  return {
    regexp
  }
}
function matchPath(pathName, options = {}) {
  const { path, exact = false, strict = false, sensitive = false } = options;
  // strict代表path最后的/要不要计算
  const paths = [].concat(path);  //字符串转数组
  return paths.reduce((matched, path) => {
    if (matched) return matched;  //只要一个路径匹配，就为true
    const { regexp } = compilePath(path, {
      strict,
      sensitive,
      end: exact
    })
    const match = regexp.exec(pathName);
    if(!match) return null;
    return {}
  }, null); //默认值为null，表示不匹配
}

export default matchPath;