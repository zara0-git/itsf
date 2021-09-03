import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import LinkIcon from "@material-ui/icons/Link";
// styles
import styles from "assets/jss/material-dashboard-pro-react/custom/toolbarMenuStyle";
import helper from "admin/helper/index";
import server from "config/server";
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
                      {item.DropDownMenus && item.DropDownMenus.length > 0 && (
                        <ExpandMoreIcon style={{ marginLeft: "3px" }} />
                      )}
                    </Link>
                  )}
                  {item.DropDownMenus && item.DropDownMenus.length > 0 ? (
                    <ul>
                      {item.DropDownMenus.map((item, key) => {
                        return (
                          <li
                            key={"dropdown-" + key}
                            style={{ width: Width ? Width : "180px" }}
                          >
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
                            ) : item.file ? (
                              <a
                                href={`${server.BaseFileUrl}pdf/${item.file}.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
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
                                {item.SubMenus && item.SubMenus.length > 0 && (
                                  <ArrowRightIcon style={{ float: "right" }} />
                                )}
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
      </nav>
    </div>
  );
}
