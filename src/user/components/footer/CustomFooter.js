import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Hidden } from "@material-ui/core";
// @material-ui/icons components
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PinDropIcon from "@material-ui/icons/PinDrop";
import CallIcon from "@material-ui/icons/Call";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

// icons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/footerStyle.js";

import { Links } from "assets/store/Sidebar";
import { MenuList } from "assets/store/MenuList";
import { ToolbarMenuList } from "assets/store/ToolbarMenuList";
const useStyles = makeStyles(styles);

export default function CustomFooter(props) {
  const classes = useStyles();

  const contactList = [
    { icon: MailOutlineOutlinedIcon, text: "bulgan@mecs.gov.mn" },
    { icon: CallIcon, text: "7034- 3414", subText: "Зөвлөгөө мэдээлэл авах" },
    {
      icon: CallIcon,
      text: "7034 - 2274",
      subText: "Санал хүсэлт хүлээн авах",
    },
  ];

  const relatedLinks = Links;

  return (
    <div
      style={{
        backgroundColor: "#2E2E2E",
        paddingBottom: "30px",
      }}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={4} md={3}>
            <div className={classes.cnt}>
              <div className={classes.headerSec1}>
                Бүх эрх хуулиар хамгаалагдсан <br /> © 2019 ITSYSTEM.MN
              </div>
              <div className={classes.bodySec}></div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={3}>
            <div className={classes.cnt}>
              <div className={classes.headerSec}>
                <h5>Үндсэн цэс</h5>
              </div>
              <div className={classes.bodySec}>
                <List>
                  {MenuList.map((value, key) => {
                    return (
                      <ListItem key={key}>
                        <ListItemIcon className={classes.listItemIcon}>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText
                          classes={{ primary: classes.listItemTextRoot }}
                        >
                          <span>{value.Name}</span>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={3}>
            <div className={classes.cnt}>
              <div className={classes.headerSec}>
                <h5>Туслах цэс</h5>
              </div>
              <div className={classes.bodySec}>
                <List>
                  {ToolbarMenuList.map((value, key) => {
                    return (
                      <ListItem key={key}>
                        <ListItemIcon className={classes.listItemIcon}>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText
                          classes={{ primary: classes.listItemTextRoot }}
                        >
                          <span>{value.Name}</span>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                  <ListItem>
                    <ListItemIcon className={classes.listItemIcon}>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listItemTextRoot }}
                    >
                      <Link to={"#"} className="link1">
                        <FacebookIcon style={{ height: "25px" }} />
                      </Link>

                      <Link to={"#"} className="link1">
                        <TwitterIcon style={{ height: "25px" }} />
                      </Link>

                      <Link to={"#"} className="link1">
                        <LinkedInIcon style={{ height: "25px" }} />
                      </Link>
                    </ListItemText>
                  </ListItem>
                </List>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={3}>
            <div className={classes.cnt}>
              <div className={classes.headerSec}>
                <h5>Хаяг байршил</h5>
              </div>
              <div className={classes.bodySec}>
                <div className={classes.addressSec}>
                  <p>
                    Монгол улс, Улаанбаатар хот, СБД дүүрэг, 8-р хороо,
                    Сүхбаатарын талбай, Эрдэм Тауэр, 1002 тоот
                    <br />
                    Утас: 7710-0707
                    <br />
                    И-мэйл: info@itsystem.mn
                  </p>
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
