import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import { Tabs } from "antd";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FromURL from "../components/URLEncoder";
import WebCam from "../components/WebCam";
import Base64Converter from "../components/Base64Converter";


const styles = theme => ({
  appBar: {
    position: "relative",
    background: "#1890FF"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {},
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  toolbarTitle: {
    flexGrow: 1
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
});

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Image to Base64 Converter
          </Typography>
          <div className={classes.toolbarTitle} />
          <iframe src="https://ghbtns.com/github-btn.html?user=mesutpiskin&repo=image-encoder-decoder&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Convert Your Images to Base64
            </Typography>
            <div className={classes.heroButtons}>
              <Tabs>
                <Tabs.TabPane tab="Import From File" key="1">
                  <Base64Converter />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Import From URL" key="2">
                  <FromURL />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Take From Webcam" key="3">
                  <WebCam />
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
