import * as React from 'react';
import {Row, Col, Card, Calendar} from 'antd';

function onPanelChange (value, mode) {
  console.log (value, mode);
}

class BasicCalender extends React.Component {
  render () {
    return (
      <>
        <Card
          bordered={false}
          bodyStyle={{padding: '20px'}}
          style={{overflow: 'scroll'}}
        >
          <Calendar onPanelChange={onPanelChange} />
        </Card>

      </>
    );
  }
}
export default BasicCalender;
