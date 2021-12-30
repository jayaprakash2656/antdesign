import * as React from 'react';
import {Breadcrumb} from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

class BreadcrumbWithIcon extends React.Component {
  render () {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="">
          <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
          <UserOutlined />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default BreadcrumbWithIcon;
