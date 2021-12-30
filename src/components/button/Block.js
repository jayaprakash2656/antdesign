import * as React from "react";
import { Button, Space } from 'antd';


class Block extends React.Component {
  
  render() {

      return (
        <div>
          <Space size='small'>
            <Button type="primary" block className="m-t-5 m-b-5">
            Primary
            </Button>
            <Button block className="m-t-5 m-b-5">Default</Button>
            <Button type="dashed" block className="m-t-5 m-b-5">
            Dashed
            </Button>
            <Button type="danger" block className="m-t-5 m-b-5">
            Danger
            </Button>
            <Button type="link" block className="m-t-5 m-b-5">
            Link
            </Button>
            </Space>
      </div>

    );
  }
}
export default Block;
