#ant design


## 接收查询参数
  传入:<Link to={{
         pathname:'/table',
         search:'?type=all&a=1'
         }}>表格</Link>
  接收:const {location} = this.props;

- 通过传入的id去到指定的页面
  <Route path="/post/:id" component={Post}></Route>
  <Link to="/post/abcdefg">文章详情</Link>

  function Post(props){
    const {match} = props;
    return (
      <div>
        id:{match.params.id}
      </div>
    )
  }

## function && class
  function component(dumb component) 根据props渲染，不会依赖任何东西,性能好
  class component(smart component)  负责状态管理,比较复杂，依赖于其他组件

## ant table组件
  自定义渲染text参数代表当前这一个，record代表这一行这个对象