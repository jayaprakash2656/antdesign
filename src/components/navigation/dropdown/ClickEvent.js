import * as React from 'react';
import {Menu, Dropdown, message} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const onClick = ({key}) => {
  message.info (`Click on item ${key}`);
};

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="">1st menu item</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="">2nd menu item</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class ClickEvent extends React.Component {
  render () {
    return (
      <Dropdown overlay={menu}>
        <Link to="#">
          Hover me, Click menu item <DownOutlined />
        </Link>
      </Dropdown>
    );
  }
}
export default ClickEvent;
