import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import LinkIcon from "@material-ui/icons/Link";
// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/customMenuStyle";
import logo from "assets/img/its/itsys-logo.png";
const useStyles = makeStyles(styles);

export default function CustomMenu(props) {
  const classes = useStyles();
  const MenuList = props.MenuList;

  return (
    <div>
      <nav className={classes.nav}>
        <ul className={classes.navUl}>
          {MenuList &&
            MenuList.map((item, key) => {
              return (
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
                      {/* {item.DropDownMenus && item.DropDownMenus.length > 0 && (
                      <ArrowDropDownIcon />
                    )} */}
                    </Link>
                  )}
                  {item.DropDownMenus && item.DropDownMenus.length > 0 ? (
                    <ul>
                      {item.DropDownMenus.map((item, key) => {
                        return (
                          <li key={"dropdown-" + key}>
                            {item.link ? (
                              <a
                                href={item.Url}
                                target="_blank"
                                className="link"
                              >
                                {item.Name}
                                <LinkIcon
                                  style={{
                                    float: "right",
                                    color: "white",
                                  }}
                                />
                                {item.SubMenus && item.SubMenus.length > 0 && (
                                  <ArrowRightIcon style={{ float: "right" }} />
                                )}
                              </a>
                            ) : (
                              <Link
                                to={item.Url ? item.Url : "#"}
                                className="link"
                              >
                                {item.Name}
                                {item.SubMenus && item.SubMenus.length > 0 && (
                                  <ArrowRightIcon style={{ float: "right" }} />
                                )}
                              </Link>
                            )}
                            {item.SubMenus && item.SubMenus.length > 0 ? (
                              <ul>
                                {item.SubMenus.map((item, key) => {
                                  return (
                                    <li key={"submenu-" + key}>
                                      {item.link ? (
                                        <a
                                          href={item.Url}
                                          target="_blank"
                                          className="link"
                                        >
                                          {item.Name}
                                        </a>
                                      ) : (
                                        <Link
                                          to={item.Url ? item.Url : "#"}
                                          className="link"
                                        >
                                          {item.Name}
                                        </Link>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}
