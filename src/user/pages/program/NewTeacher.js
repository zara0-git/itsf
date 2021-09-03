import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import { Rules } from "assets/store/Rules";
import Sidemenu from "user/components/sidemenu/Sidemenu";
import PdfList from "user/components/PdfList/PdfList";
// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/homePageStyle";
import Swipe from "user/components/Swipe/Swipe";
//images
import img1 from "assets/img/newTeacher/1.jpg";
import img2 from "assets/img/newTeacher/2.jpg";
import img3 from "assets/img/newTeacher/3.jpg";
import img4 from "assets/img/newTeacher/4.jpg";
import img5 from "assets/img/newTeacher/5.jpg";
import img6 from "assets/img/newTeacher/6.jpg";
import img7 from "assets/img/newTeacher/7.jpg";
import img8 from "assets/img/newTeacher/8.jpg";
import img9 from "assets/img/newTeacher/9.jpg";
import img10 from "assets/img/newTeacher/10.jpg";
import img11 from "assets/img/newTeacher/11.jpg";
import img12 from "assets/img/newTeacher/12.jpg";

const useStyles = makeStyles(styles);

export default function (props) {
  const classes = useStyles();
  var filterImages = [];
  filterImages.push({ id: 1, imageName: img1 });
  filterImages.push({ id: 2, imageName: img2 });
  filterImages.push({ id: 3, imageName: img3 });
  filterImages.push({ id: 4, imageName: img4 });
  filterImages.push({ id: 5, imageName: img5 });
  filterImages.push({ id: 6, imageName: img6 });
  filterImages.push({ id: 7, imageName: img7 });
  filterImages.push({ id: 8, imageName: img8 });
  filterImages.push({ id: 9, imageName: img9 });
  filterImages.push({ id: 10, imageName: img10 });
  filterImages.push({ id: 11, imageName: img11 });

  filterImages.push({ id: 12, imageName: img12 });

  return (
    <div>
      <div className={classes.container}>
        <GridContainer style={{ background: "#FFFFFF" }}>
          <GridItem xs={12} sm={12} md={9}>
            <div
              style={{
                position: "relative",
                margin: "30px 0",
                borderTop: "1px solid #2CA02C",
              }}
            >
              <h3
                style={{
                  position: "absolute",
                  top: "-17px",
                  left: 0,
                  right: "auto",
                  bottom: "auto",
                  display: "inline-block",
                  margin: 0,
                  padding: "4px 12px",
                  backgroundColor: "#2CA02C",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "400",
                  textTransform: "uppercase",
                }}
              >
                Шинэ Багш
              </h3>
            </div>
            <div>
              <Swipe images={filterImages} index={6} />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div style={{ marginTop: "10px" }}>
              <Sidemenu index="5" />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
