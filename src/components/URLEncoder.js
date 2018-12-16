import React, { Component } from "react";
import { Input } from "antd";
import * as helper from "../utils/Helper";
import Base64TextArea from "./Base64TextArea";
import ReactLoading from "react-loading";
class URLEncoder extends Component {
  state = {
    base64: undefined,
    loading: false
  };

  onConvert = value => {
    if (helper.isNull(value)) {
      helper.showMessage("Image URL is required.", "info");
      return;
    }
/*     if (!helper.isValidURL(value)) {
      helper.showMessage("Image URL is not valid.", "error");
      return;
    } */
    this.setState({
      loading: true,
      base64: undefined
    });
    this.toDataURL(value, this.onCompleted);
  };

  onCompleted = base64 => {
    this.setState({
      base64: base64,
      loading: false
    });
  };

  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

  render() {
    return (
      <div>
        <Input.Search
          placeholder="Image URL: http://samplesite.com/image.png"
          enterButton="Convert"
          size="large"
          onSearch={this.onConvert}
        />
        {this.state.loading ? (
          <center>
            <div style={{ marginTop: "5%" }}>
              <ReactLoading
                type="spin"
                color="#1890ff"
                height={"20%"}
                width={"20%"}
              />
            </div>
          </center>
        ) : (
          <div />
        )}
        <div style={{ marginTop: "5%" }}>
          <Base64TextArea text={this.state.base64} />
        </div>
      </div>
    );
  }
}

export default URLEncoder;
