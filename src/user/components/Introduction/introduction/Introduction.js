import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  container: {},
  imgSec: {
    "&:img": {
      width: "200px",
    },
  },
  textSec: {
    textAlign: "justify",
    paddingLeft: "10px",
  },

  titleSec: {
    borderBottom: "1px solid blue",
    paddingLeft: "10px",
  },
  topSec: {
    margin: "10px",
    padding: "10px",
  },
});

const useStyles = makeStyles(styles);
export default function Introduction(props) {
  const classes = { ...useStyles() };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div className={classes.topSec}>
          <div
            style={{
              position: "relative",
              margin: "30px 0",
              borderTop: "1px solid #1F77B4",
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
                backgroundColor: "#1F77B4",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "400",
                textTransform: "uppercase",
              }}
            >
              Байгууллагын танилцуулга
            </h3>
          </div>
        </div>
        <div className={classes.topSec}>
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
              Удирдлага төлөвлөлт, захиргаа аж ахуйн алба
            </h3>
          </div>
        </div>
        <div className={classes.topSec}>
          <div
            style={{
              position: "relative",
              margin: "30px 0",
              borderTop: "1px solid #1F77B4",
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
                backgroundColor: "#1F77B4",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "400",
                textTransform: "uppercase",
              }}
            >
              Сургалт, судалгаа арга зүйн алба
            </h3>
          </div>
        </div>
        <div className={classes.topSec}>
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
              БСУГ-ын албан хаагчдын товч танилцуулга
            </h3>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
}
