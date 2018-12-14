import React, { Component } from "react";
import { Upload, Icon } from "antd";
import Base64TextArea from "./Base64TextArea";
import * as helper from "../utils/Helper";
class ImageUploader extends Component {
  state = {
    fileList: undefined
  };

  beforeUpload = file => {
    const isJPG = file.type === "image/jpeg";
    const isPNG = file.type === "image/png";
    if (!(isJPG || isPNG)) {
      helper.showMessage("You can only upload image file!", "info");
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      helper.showMessage("Image must smaller than 2MB!", "info");
      return false;
    }
    return isJPG && isLt2M;
  };

  onChange = info => {
    const status = info.file.status;
    if (status !== "uploading") {
    }
    if (status === "done") {
      helper.showMessage(
        `${info.file.name} file uploaded successfully.`,
        "success"
      );

    } else if (status === "error") {
      //helper.showMessage(`${info.file.name} file upload failed.`, "error");
    }
    this.setState({
      fileList: info.fileList
    });
  };

  render() {
    return (
      <div>
        <Upload.Dragger
          beforeUpload={this.beforeUpload}
          fileList={this.state.fileList}
          onChange={this.onChange}
          listType="picture"
          action="//jsonplaceholder.typicode.com/posts/"
          multiple={false}
        >
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
          {helper.isNull(this.state.fileList) ? (
            <div />
          ) : (
            <Base64TextArea
              text={
                this.state.fileList[this.state.fileList.length - 1].thumbUrl
              }
            />
          )}
        </div>
      </div>
    );
  }
}

export default ImageUploader;
