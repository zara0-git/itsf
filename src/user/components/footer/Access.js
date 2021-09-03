import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";

import GridItem from "components/Grid/GridItem";
// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Access(props) {
  const classes = useStyles();
  return (
    <GridItem xs={12} sm={4} md={3}>
      <div style={{ padding: "0 10px", marginLeft: "15px" }}>
        <div>
          <h2 className={classes.linkHeaderText}>Хандалт</h2>
        </div>
        <div style={{ padding: "0 10px" }}>
          <List
            component="nav"
            className={classes.accessList}
            aria-label="contacts"
          >
            <ListItem className={classes.accessItem}>
              <ListItemIcon className={classes.accessItemIcon}>
                <PersonAddOutlinedIcon
                  style={{ width: "18px", height: "18px" }}
                />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.accessItemTextRoot }}>
                <span>Өнөөдөр:</span>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.accessItem}>
              <ListItemIcon className={classes.accessItemIcon}>
                <GroupAddOutlinedIcon
                  style={{ width: "18px", height: "18px" }}
                />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.accessItemTextRoot }}>
                <span>Өчигдөр:</span>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.accessItem}>
              <ListItemIcon className={classes.accessItemIcon}>
                <PeopleAltOutlinedIcon
                  style={{ width: "18px", height: "18px" }}
                />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.accessItemTextRoot }}>
                <span>Сүүлийн 7 хоног:</span>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.accessItem}>
              <ListItemIcon className={classes.accessItemIcon}>
                <PeopleAltOutlinedIcon
                  style={{ width: "18px", height: "18px" }}
                />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.accessItemTextRoot }}>
                <span>Өнгөрсөн сард:</span>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.accessItem}>
              <ListItemIcon className={classes.accessItemIcon}>
                <SupervisedUserCircleOutlinedIcon
                  style={{ width: "18px", height: "18px" }}
                />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.accessItemTextRoot }}>
                <span>Нийт:</span>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    </GridItem>
  );
}
