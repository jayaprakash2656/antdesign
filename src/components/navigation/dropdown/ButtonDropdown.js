import * as React from 'react';
import {Menu, Dropdown, Button, message} from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
function handleButtonClick (e) {
  message.info ('Click on left button.');
  console.log ('click left button', e);
}

function handleMenuClick (e) {
  message.info ('Click on menu item.');
  console.log ('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
    <UserOutlined />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
    <UserOutlined />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
    <UserOutlined />
      3rd item
    </Menu.Item>
  </Menu>
);

class ButtonDropdown extends React.Component {
  render () {
    return (
      <div id="components-dropdown-demo-dropdown-button">
        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
          Dropdown
        </Dropdown.Button>
        <Dropdown.Button overlay={menu} icon={UserOutlined}>
          Dropdown
        </Dropdown.Button>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
          Dropdown
        </Dropdown.Button>
        <Dropdown overlay={menu}>
          <Button>
            Button <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    );
  }
}
export default ButtonDropdown;
