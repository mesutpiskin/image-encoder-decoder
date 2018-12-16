import React, { Component } from "react";
import { Upload, Icon, Button } from "antd";
import Base64TextArea from "./Base64TextArea";
import * as helper from "../utils/Helper";
class ImageUploader extends Component {
  state = {
    fileList: [],
    image: undefined
  };

  beforeUpload = file => {
    const isJPG = file.type === "image/jpeg";
    const isPNG = file.type === "image/png";
    const isGIF = file.type === "image/gif";
    const isSVG = file.type === "image/svg";
    const isWEBP = file.type === "image/webp";
    if (!(isJPG || isPNG || isGIF || isSVG || isWEBP)) {
      helper.showMessage("You can only upload image file!", "info");
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 3;
    if (!isLt2M) {
      helper.showMessage("Image must smaller than 3MB!", "info");
      return false;
    }
    return isJPG && isLt2M;
  };

  onChange = info => {
    console.log(info);
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
  convertHandle = e => {
    let img = this.state.fileList[this.state.fileList.length - 1];
    this.setState({
      image: img.thumbUrl
    });
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <Upload.Dragger
          beforeUpload={this.beforeUpload}
          fileList={this.state.fileList}
          onChange={this.onChange}
          listType="picture"
          action={"//localhost:3000/" + this.state.image}
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
          {this.state.fileList.length >= 1 ? (
            <center>
              <div>
                <Button type="primary" onClick={this.convertHandle}>
                  Convert to Base64
                </Button>
              </div>
            </center>
          ) : (
            <div />
          )}
          <div style={{ marginTop: "2%" }}>
            <Base64TextArea text={this.state.image} />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUploader;
