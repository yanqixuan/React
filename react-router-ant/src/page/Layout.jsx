import React from 'react';
import {Layout,Row,Col,Avatar,Input,Dropdown,Icon,Badge, Menu} from 'antd';
import {Link} from 'react-router-dom'
const {Header,Footer,Sider,Content} = Layout;

function DropMenu(){
  return (
    <Menu>
      <Menu.Item>
        <a href="">1</a>
      </Menu.Item>
      <Menu.Item>
        <a href="">2</a>
      </Menu.Item>
      <Menu.Item>
        <a href="">3</a>
      </Menu.Item>
    </Menu>
  )
}

class PageLayout extends React.Component{
  render(){
    return (
      <Layout>
        <Header style={{color:"#fff",textAlign:'center',fontWeight:'bold'}}>
          <Row>
            {/* 用span表示宽度,总共24 */}
            <Col span={10}>
              React + Antd 实践
            </Col>
            <Col span={8}>
              <Input placeholder="请输入你想要....."></Input>
            </Col>
            <Col span={6}>
              <Avatar style={{backgroundColor:'#666',marginRight:20}} icon="user"></Avatar>
              <Dropdown overlay={DropMenu}>
                <span>Hi,<Icon type="down"></Icon></span>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          {/* 左 */}
          <Sider>
            <Menu style={{width:256,height:'90vh',overflow:'auto',minWidth:256}} defaultOpenKeys={['sub1']} mode="inline">
              <Menu.SubMenu key='sub1'title={
                <span><Icon type="smile-0"></Icon>部分ui组件使用</span>
              }>
                <Menu.Item key="sub1-1">
                  <Link to={'table'}>表格</Link>
                </Menu.Item>
                <Menu.Item key="sub1-2">
                  <Link to={'label'}>标签页</Link>
                </Menu.Item>

              </Menu.SubMenu>
            </Menu>
          </Sider>
          {/* 右 */}
          <Content>
              {this.props.children}
          </Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    )
  }
}

export default PageLayout;

