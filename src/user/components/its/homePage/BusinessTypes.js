import React from "react";
import { makeStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

// icons
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
var styles = {
  icons: {},
  containerSec: {
    display: "flex",
    "&:hover": {
      "& .iconsCnt": {
        backgroundColor: "#1769B2",
        border: " 5px solid rgba(250, 236, 240, 0.8)",
        width: "70px",
        height: "70px",
        "& .icons": {
          color: "white",
        },
      },
    },
    "& .iconsCnt": {
      border: " 5px solid rgba(130, 130, 130, 0.3)",
      borderRadius: "50%",
      color: "#1769B2",
      margin: "10px",

      width: "70px",
      height: "70px",
      position: "relative",

      "& .icons": {
        color: "#1769B2",
        fontSize: "20px",
        width: "20px",
        margin: "20px",
      },
      "& .icons1": {
        color: "#1769B2",
        height: "20px",
        width: "20px",
        position: "absolute",
        top: "30px",
        right: "-10px",
        borderRadius: "100%",
        backgroundColor: "#EEEEEE",
      },
    },
  },

  textSec: {
    margin: "10px",
    marginTop: 0,
    "& h4": {
      fontSize: "16px",
      fontWeight: "500",
      height: "30px",
    },
    "& p": {
      fontSize: "14px",
      fontWeight: "400",
      textAlign: "justify",
    },
  },
  titleSec: {
    margin: "auto",
    position: "relative",
    marginBottom: "10px",
    width: "100%",
    "& h3": {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "500",
    },
  },
  titleBottom: {
    borderTop: "1px solid",
    padding: "auto",
    height: "10px",
    marginBottom: "10px",
  },

  buttonSec: {
    position: "absolute",
    top: "35vh",

    color: "white",
    fontSize: "16px",
    width: "100%",
    animation: `pulse 1s linear `,

    "& .link": {
      border: " 1px solid ",
      color: "white",

      padding: "10px",
      borderRadius: "20px",
      transition: "0.5s",
      "&:hover": { fontSize: "18px", color: "#6163FF", fontWeight: "500" },
    },
  },
};

const useStyles = makeStyles(styles);
export default function BusinessType(props) {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div>
          <div className={classes.titleSec}>
            <h3>БИЗНЕСИЙН ҮНДСЭН ЧИГЛЭЛ</h3>
          </div>
          <div className={classes.titleBottom}>
            <div style={{ margin: "auto", width: "30px" }}>
              <FiberManualRecordIcon
                style={{
                  color: "#1769B2",
                  height: "30px",
                  margin: "auto",
                  marginTop: "-20px",
                  border: "2px solid #EEEEEE",
                  backgroundColor: "#EEEEEE",
                }}
              />
            </div>
          </div>
        </div>
      </GridItem>
      <GridItem xs={12} sm={4} md={4}>
        <div className={classes.containerSec}>
          <div className="iconsCnt">
            <AccountTreeIcon className="icons" />
            <FiberManualRecordIcon className="icons1" />
          </div>
          <div className={classes.textSec}>
            <h4>CИСТЕМ ИНТЕГРАЦЧЛАЛ</h4>
            <p>
              Байгууллагын сүлжээ, сервэрийн өрөөний зохион байгуулалт,
              сүлжээний цогц шийдэл, утасгүй сүлжээний цогц шийдэл, Үйлдвэрийн
              хяналт удирдлага, автомажуулалтын систем.
            </p>
          </div>
        </div>
      </GridItem>
      <GridItem xs={12} sm={4} md={4}>
        <div className={classes.containerSec}>
          <div className="iconsCnt">
            <ImportantDevicesIcon className="icons" />
            <FiberManualRecordIcon className="icons1" />
          </div>
          <div className={classes.textSec}>
            <h4>ПРОГРАМ ХАНГАМЖ</h4>
            <p>
              Дэлхий нийтийн техник технологийн хөгжилтэй хөл нийлүүлэн алхан,
              хүчирхэг технологиудыг монголдоо анхлан нэвтрүүлж, шилдэг програм
              хангамжийг хөгжүүлэх.
            </p>
          </div>
        </div>
      </GridItem>
      <GridItem xs={12} sm={4} md={4}>
        <div className={classes.containerSec}>
          <div className="iconsCnt">
            <PhoneAndroidIcon className="icons" />
            <FiberManualRecordIcon className="icons1" />
          </div>
          <div className={classes.textSec}>
            <h4>МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ҮЙЛЧИЛГЭЭ</h4>
            <p>
              Хэрэглэгч байгууллагынхаа мэдээллийн аюулгүй байдал, технологийн
              өргөтгөл, хөрөнгө оруулалтыг оновчтой төлөвлөх, нэвтрүүлэх,
              найдвартай ажиллагааг тасралтгүй хангах.
            </p>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
}
