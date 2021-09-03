import React from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Hidden } from "@material-ui/core";

// custom components
import ToolbarCustomMenu from "user/components/header/ToolbarCustomMenu";

// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/headerStyle";
import { ToolbarMenuList } from "assets/store/ToolbarMenuList";
class CustomToolbarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.AppBarRef = null;
    this.MenuList = ToolbarMenuList;
  }

  clickGroup = (ButtonName) => {
    alert(ButtonName);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.toolbarMenu}>
        <Hidden mdDown>
          <ToolbarCustomMenu MenuList={this.MenuList} />
        </Hidden>
      </div>
    );
  }
}
export default withStyles(styles)(CustomToolbarMenu);
