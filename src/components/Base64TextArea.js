import React, { Component } from "react";
import { Card, Input, Button, Modal, Tooltip } from "antd";
import * as helper from "../utils/Helper";
import { CopyToClipboard } from "react-copy-to-clipboard";
class Base64TextArea extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };


  render() {
    let basetext = this.props.text;
    if (helper.isNull(basetext)) {
      return <div />;
    }
    return (
      <Card
        extra={
          <div>
            <Tooltip
              placement="bottomRight"
              title="Image preview (base64 to image)"
            >
              <Button
                onClick={this.showModal}
                type="danger"
                shape="circle"
                icon="eye"
              />{" "}
            </Tooltip>
            <Tooltip placement="bottomRight" title="Copy to clipboard">
              <CopyToClipboard
                text={basetext}
                onCopy={() => helper.showMessage("Copied.", "success")}
              >
                <Button type="danger" shape="circle" icon="copy" />
              </CopyToClipboard>
            </Tooltip>
          </div>
        }
        title={
          <div style={{ color: "#1890ff" }}>
            Base64
            <br />
            Prefix: {basetext.split(";")[0]}
          </div>
        }
      >
        <Input.TextArea rows={7} value={basetext} />
        <Modal
          title="Preview an image (Base64 to Image)"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          <img style={{ width: "100%" }} src={basetext} />
        </Modal>
      </Card>
    );
  }
}

export default Base64TextArea;
