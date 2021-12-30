import * as React from 'react';
import {Card, Avatar} from 'antd';
import { FacebookOutlined, PhoneOutlined, TwitterOutlined, SkypeOutlined } from '@ant-design/icons';
const {Meta} = Card;
class Testimonial extends React.Component {
  render () {
    return (
      <div>
        <Meta
          avatar={
            <Avatar
              src={this.props.img}
              style={{width: '60px', height: '60px'}}
            />
          }
          title={
            <div>
              <p style={{margin: '0'}}>{this.props.name}</p>
              <small>{this.props.designation}</small>
              <div className="socialicons-margin">
              <FacebookOutlined />
              <TwitterOutlined />
              <PhoneOutlined />
              <SkypeOutlined />
              </div>
            </div>
          }
        />
        <div className="m-t-15">{this.props.description}</div>
      </div>
    );
  }
}
export default Testimonial;
