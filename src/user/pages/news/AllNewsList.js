import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import NewsList from "user/components/news/newsList/NewsList";
import Sidemenu from "user/components/sidemenu/Sidemenu";
import AllNewsList from "user/components/news/newsList/AllNewsList";
// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";

const useStyles = makeStyles(styles);

export default function (props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <GridContainer style={{ background: "#FFFFFF" }}>
          <GridItem xs={12} sm={12} md={9}>
            <div>
              <AllNewsList
                RootFilter={[
                  ["type", "=", "Онцгой"],
                  "or",
                  ["type", "=", "Зураг"],
                  "or",
                  ["type", "=", "Видео"],
                  "or",
                  ["type", "=", "Цаг үе"],
                ]}
                typeId="news"
                name="Цаг үеийн мэдээ"
              />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div style={{ marginTop: "10px" }}>
              <Sidemenu index="3" />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
