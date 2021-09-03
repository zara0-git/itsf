import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { useTranslation } from "react-i18next";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {children}
    </div>
  );
}

const styles = (theme) => ({
  tabRoot: {
    minHeight: "30px",
    marginBottom: "2px",
  },
  displayNone: {
    display: "none !important",
  },
  horizontalDisplay: {
    display: "block",
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    padding: "8px 0",
    color: "#555555",
    height: "auto",
    opacity: "1",
    margin: "0",
    fontSize: "12px",
    width: "100%",
    minWidth: "60px",
    minHeight: "10px !important",
    maxHeight: "30px",
    textAlign: "center",
    transition: "all .3s",
    fontWeight: "400",
    lineHeight: 1,
    borderRadius: "0",
    textTransform: "uppercase",
    letterSpacing: "initial",
  },
  vertical: {
    width: "calc(100%/3)",
    borderBottom: "1px solid #92a5ad",
  },
  hasMany: {
    width: "80px",
  },
  shortVertical: {
    width: "auto",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  selected: {
    "&,&:hover": {
      color: "#FFF",
      backgroundColor: "#92a5ad",
    },
  },
});

const useStyles = makeStyles(styles);

export default function CustomTab(props) {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(props.active);
  const handleChange = (event, active) => {
    setValue(active);
  };
  const classes = useStyles();
  const { tabs } = props;
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.tabRoot,
        flexContainer: props.vertical ? "" : classes.horizontalDisplay,
        indicator: classes.displayNone,
      }}
      value={value}
      onChange={handleChange}
      //   variant="scrollable"
    >
      {tabs.map((prop, key) => {
        return (
          <Tab
            label={t(prop.tabButton + "")}
            key={key}
            classes={{
              root:
                classes.pills +
                " " +
                (props.vertical ? classes.vertical : "") +
                " " +
                (props.hasMany ? classes.hasMany : "") +
                " " +
                (props.shortVertical ? classes.shortVertical : ""),
              selected: classes.selected,
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = tabs.map((prop, key) => {
    return (
      <TabPanel key={"Tb" + key} value={value} index={key}>
        {prop.tabContent}
      </TabPanel>
    );
  });
  return (
    <GridContainer>
      <GridItem
        xs={12}
        sm={12}
        md={props.vertical ? 12 : 2}
        style={{ padding: props.vertical ? "0 15px" : "0" }}
      >
        {tabButtons}
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={props.vertical ? 12 : 10}
        style={{ padding: props.vertical ? "0 15px" : "0 5px" }}
      >
        {tabContent}
      </GridItem>
    </GridContainer>
  );
}

CustomTab.defaultProps = {
  active: 0,
};

CustomTab.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabContent: PropTypes.node,
    })
  ).isRequired,
};
