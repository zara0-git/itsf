import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// icons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/toolbarMenuStyle";

const useStyles = makeStyles(styles);

export default function ToolbarCustomMenu(props) {
  const classes = useStyles();
  const MenuList = props.MenuList;

  return (
    <div>
      <nav className={classes.nav}>
        <ul className={classes.navUl}>
          {MenuList &&
            MenuList.map((item, key) => {
              var Width = item.Width;
              return (
                <>
                  <li style={{ color: "white", height: "20px" }}>|</li>
                  <li key={"li-" + key}>
                    {item.link ? (
                      <a href={item.Url} target="_blank" className="link">
                        {item.Name}
                      </a>
                    ) : (
                      <Link
                        to={item.Url ? item.Url : "#"}
                        onClick={() => {
                          if (item.Click) {
                            item.Click();
                          }
                        }}
                        className="link"
                      >
                        {item.Name}
                        {item.DropDownMenus &&
                          item.DropDownMenus.length > 0 && (
                            <ExpandMoreIcon style={{ marginLeft: "3px" }} />
                          )}
                      </Link>
                    )}
                  </li>
                </>
              );
            })}
          <li style={{ color: "white", height: "20px" }}>|</li>
          <li>
            <Link to={"#"} className="link1">
              <FacebookIcon style={{ height: "20px" }} />
            </Link>
          </li>
          <li style={{ color: "white", height: "20px" }}>|</li>
          <li>
            <Link to={"#"} className="link1">
              <TwitterIcon style={{ height: "20px" }} />
            </Link>
          </li>
          <li style={{ color: "white", height: "20px" }}>|</li>
          <li>
            <Link to={"#"} className="link1">
              <LinkedInIcon style={{ height: "20px" }} />
            </Link>
          </li>
          <li style={{ color: "white", height: "20px" }}>|</li>
        </ul>
      </nav>
    </div>
  );
}
