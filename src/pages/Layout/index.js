import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, Popconfirm } from 'antd';
import React, { useState } from 'react';
import './index.scss';
const { Header, Sider, Content } = Layout;

function logout () {
}

function App () {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="header"
          style={{
            background: '#fff',
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div class="header-info">
            <span className="user-name"><UserOutlined />&nbsp;&nbsp;xxxx</span>
            <span className="user-logout">
              <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={logout}>
                <LogoutOutlined />&nbsp;&nbsp;退出
              </Popconfirm>
            </span>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff',
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;