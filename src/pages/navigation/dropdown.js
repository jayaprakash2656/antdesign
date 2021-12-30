import * as React from 'react';
import {Row, Col, Card} from 'antd';
import BasicDropdown from '../../components/navigation/dropdown/BasicDropdown';
import TriggerMode from '../../components/navigation/dropdown/TriggerMode';
import ClickEvent from '../../components/navigation/dropdown/ClickEvent';
import ContextMenu from '../../components/navigation/dropdown/ContextMenu';
import Placement from '../../components/navigation/dropdown/Placement';

class Dropdown extends React.Component {
  render () {
    return (
      <>
        <Row gutter={16}>
          <Col xs={24} sm={16}>
            <Card
              bordered={false}
              title={<p>Placement of Dropdown</p>}
              bodyStyle={{padding: '0 20px 16px'}}
              className="m-t-15"
            >
              <Placement />
            </Card>
            <Card
              bordered={false}
              title={<p>Click Event</p>}
              bodyStyle={{padding: '0 20px 20px'}}
              className="m-t-15"
            >
              <ClickEvent />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              bordered={false}
              title={<p>Basic Dropdown</p>}
              bodyStyle={{padding: '0 20px 20px'}}
              className="m-t-15"
            >
              <BasicDropdown />
            </Card>
            <Card
              bordered={false}
              title={<p>Trigger Mode</p>}
              bodyStyle={{padding: '0 20px 20px'}}
              className="m-t-15"
            >
              <TriggerMode />
            </Card>
            <Card
              bordered={false}
              title={<p>Context menu</p>}
              bodyStyle={{padding: '0 20px 20px'}}
              className="m-t-15"
            >
              <ContextMenu />
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Dropdown;
