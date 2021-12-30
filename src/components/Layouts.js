import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, LayoutOutlined, FormOutlined, MenuFoldOutlined, AppstoreOutlined, CalendarOutlined, TableOutlined, LineChartOutlined, ProfileOutlined, SwitcherOutlined, FileTextOutlined } from '@ant-design/icons';
import RoutesPage from '../routes'


const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


function Layouts() {

const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
    <Header className="header"
    style={{
      zIndex: '999',
      position: 'fixed',
      width: '100%'
    }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        marginTop: '65px'
      }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1">
                    <a href="/dashboard">
                      <div class>
                      <DashboardOutlined />
                        <span> Dashboard </span>
                      </div>
                    </a>
                </Menu.Item>
                <SubMenu key="2"
                    title={
                      <span>
                          <LayoutOutlined />
                          <span>Layout</span>
                      </span>
                    }
                    >
                    <Menu.Item key="sub2.1">
                        <a href="/layout/grid"><span>Grid</span></a>
                    </Menu.Item>
                    <Menu.Item key="sub2.2">
                        <a href="/layout/gridLayout"><span>Layout</span></a>
                    </Menu.Item>
                </SubMenu>
                {/* <SubMenu key="3"
                    title={
                    <span>
                        <FormOutlined />
                        <span>Form</span>
                    </span>
                    }
                    >
                    <Menu.Item key="3.1">
                        <a href="/form/form-elements">Form Elements</a>
                    </Menu.Item>
                    <Menu.Item key="3.2">
                        <a href="/form/form-components">Form Components</a>
                    </Menu.Item>
                    <Menu.Item key="3.3">
                        <a href="/form/form-controls">Form Controls</a>
                    </Menu.Item>
                </SubMenu> */}
                <SubMenu
                    key="4"
                    title={
                    <span>
                        <MenuFoldOutlined />
                        <span>Navigation</span>
                    </span>
                    }
                    >
                    <Menu.Item key="4.1">
                        <a href="/navigation/affix">Affix / Breadcrumbs</a>
                    </Menu.Item>
                    <Menu.Item key="4.2">
                        <a href="/navigation/dropdown">Dropdown</a>
                    </Menu.Item>
                    <Menu.Item key="4.4">
                        <a href="/navigation/menu">Menu</a>
                    </Menu.Item>
                    <Menu.Item key="4.5">
                        <a href="/navigation/pagination">Pagination</a>
                    </Menu.Item>
                    <Menu.Item key="4.6">
                        <a href="/navigation/pageheader">Pageheader</a>
                    </Menu.Item>
                    <Menu.Item key="4.7">
                        <a href="/navigation/steps">Steps</a>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                key="5"
                    title={
                    <span>
                        <AppstoreOutlined />
                        <span>Components</span>
                    </span>
                    }
                    >
                    <Menu.Item key="5.1">
                        <a href="/components/buttons">
                        Buttons</a>
                    </Menu.Item>
                    <Menu.Item key="5.2">
                        <a href="/components/typography">
                        Typography</a>
                    </Menu.Item>
                </SubMenu>
                {/* 
                <Menu.Item key="5">
                    <a href="calendar">
                    
                      <Icon type="calendar" />
                      Calendar
                    
                    </a>
                </Menu.Item>
                */}
                <SubMenu
                      key="6"
                      title={
                      <span>
                          <CalendarOutlined />
                          <span>Calendar</span>
                      </span>
                      }
                      >
                      <Menu.Item key="6.1">
                          <a href="/calendar/basic-calendar">Basic Calendar</a>
                      </Menu.Item>
                      <Menu.Item key="6.2">
                          <a href="/calendar/notice-calendar">Notice Calendar</a>
                      </Menu.Item>
                      <Menu.Item key="6.3">
                          <a href="/calendar/selectable-calendar">Selectable Calendar</a>
                      </Menu.Item>
                </SubMenu>
                <SubMenu
                      key="7"
                      title={
                      <span>
                          <TableOutlined />
                          <span>Datadisplay </span>
                      </span>
                      }
                      >
                      <Menu.Item key="7.1">
                          <a href="/data-display/list">
                          List </a>
                      </Menu.Item>
                      <Menu.Item key="7.2">
                          <a href="/data-display/tooltip-popover">
                          Tooltips/Popovers  </a>
                      </Menu.Item>
                      <Menu.Item key="7.3">
                          <a href="/data-display/carousel">
                          Carousel</a>
                      </Menu.Item>
                </SubMenu>
                <Menu.Item key="8">
                    <a href="/charts">
                        <div><LineChartOutlined /><span>Charts</span></div>
                    </a>
                </Menu.Item>
                <Menu.Item key="9">
                     <a href="/profile">
                        <div><ProfileOutlined /><span>Profile</span></div>
                    </a>
                </Menu.Item>
                <Menu.Item key="10">
                    <a href="/table">
                         <div><TableOutlined/><span>Table</span></div>
                     </a>
                </Menu.Item>
                <Menu.Item key="11">
               
                    <a href="/docs">
                          <div><FileTextOutlined /><span>docs </span></div>
                    </a>
                    </Menu.Item>
                </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px', marginLeft: 200 }} >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{ margin: '24px 16px 0', overflow: 'initial' }}
        >
          {/* <Route> */}
          <RoutesPage/>
          {/* </Route> */}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    );
  }
  
  export default Layouts;