import React, { Component } from "react";
import Webcam from "react-webcam";
import { Button } from "antd";
import Base64TextArea from "./Base64TextArea";

class WebCam extends Component {
  state = {
    image: undefined,
    base64text: undefined
  };
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    let imageSrc = this.webcam.getScreenshot();
    this.setState({
      base64text: imageSrc
    });
  };
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <center>
          <div>
            <Webcam
              audio={false}            
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              style={{ width: "100%", height:"auto" }}
              videoConstraints={videoConstraints}
            />
            <Button type="primary" onClick={this.capture}>
              Capture Photo
            </Button>
          </div>
        </center>
        <div style={{ marginTop: "5%" }}>
          <Base64TextArea text={this.state.base64text} />
        </div>
      </div>
    );
  }
}

export default WebCam;
