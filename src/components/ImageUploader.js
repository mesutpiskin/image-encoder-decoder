import React, { Component } from "react";
import { Upload, Icon} from "antd";
import Base64TextArea from "./Base64TextArea";

class ImageUploader extends Component {
  state = {
    base64: undefined
  };
  render() {
    return (
      <div>
        <Upload.Dragger>
          <p className="ant-upload-drag-icon">
            <Icon type="upload" />
          </p>
          <p className="ant-upload-text">
            Click or drag image file to this area to upload
          </p>
          <p className="ant-upload-hint">
            You can upload up to unlimited images (max. 3.00 MB each) as JPG,
            PNG, GIF, WebP, SVG or BMP.
          </p>
        </Upload.Dragger>
        <div style={{ marginTop: "5%" }}>
          <Base64TextArea text={this.state.base64} />
        </div>
      </div>
    );
  }
}

export default ImageUploader;
