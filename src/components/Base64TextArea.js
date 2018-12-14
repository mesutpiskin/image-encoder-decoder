import React, { Component } from "react";
import { Card, Input, Button, Modal, Checkbox } from "antd";
import * as helper from "../utils/Helper";
class Base64TextArea extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    if (helper.isNull(this.props.text)) {
      return <div />;
    }
    return (
      <Card
        extra={
          <div>
            {" "}
            <Button type="danger" shape="circle" icon="share-alt" />{" "}
            <Button type="danger" shape="circle" icon="delete" />{" "}
            <Button
              onClick={this.showModal}
              type="danger"
              shape="circle"
              icon="eye"
            />{" "}
            <Button type="danger" shape="circle" icon="copy" />
          </div>
        }
        title={
          <div style={{ color: "#1890ff" }}>
            Base64
            <br />
            Prefix: {this.props.text.split(";")[0]}
          </div>
        }
      >
        <Input.TextArea rows={7} value={this.props.text} />
        <Modal
          title="Preview an image (Base64 to Image)"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          <img
            style={{ width: "100%" }}
            src={"data:image/jpeg;" + this.props.text}
          />
        </Modal>
      </Card>
    );
  }
}

export default Base64TextArea;
