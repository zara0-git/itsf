import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { collapses } from "myComponent/store/Collapses";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
// @material-ui/icons
import ExpandMore from "@material-ui/icons/ExpandMore";

import styles from "assets/jss/material-dashboard-pro-react/components/accordionStyle.js";

const useStyles = makeStyles(styles);
const styles1 = (theme) => ({
  expansionPanelDetails: {
    textAlign: "justify",
  },
  titleSec: {
    borderBottom: "1px solid blue",
  },
  textSec: {
    textAlign: "justify",
  },
});

const useStyles1 = makeStyles(styles1);
export default function Accordion(props) {
  const [active, setActive] = React.useState(0);
  const handleChange = (panel) => (event, expanded) => {
    setActive(expanded ? panel : -1);
  };
  const classes = { ...useStyles(), ...useStyles1() };

  return (
    <GridContainer xs={12} sm={12} md={9}>
      <GridItem xs={12} sm={12} md={12}>
        <h4 className={classes.titleSec}>Түүхэн замнал</h4>
      </GridItem>
      <GridItem>
        <div>
          <p className={classes.textSec}>
            Булган аймаг 1938 онд байгуулагдахад түүний Гэгээрлийн хэлтэс нь
            дарга, сургуулийн ба бичиг үсгийн байцаагч тус бүр нэгтэй ажиллаж,
            сургуулийн хэргээс гадна ард түмнийг бичиг үсэгт сургах ажил, клуб,
            улаан булан, улаан гэр, кино зэрэг ажлыг удирдаж байжээ. Түүнээс
            хойш дараах нэршлээр нэрлэгдэж байсан байна.
          </p>
          <ul>
            <li>1958-1959 онд Сурган хүмүүжүүлэх ухааны кабинет</li>
            <li>1959-1992 онд Сургалт Заах аргын кабинет</li>
            <li>1992-1996 онд Сургалт, заах арга зүйн төв</li>
            <li>1992-1996 онд Сургалт, заах арга зүйн төв</li>
            <li>1998-2003 онд Боловсрол, соёлын төв</li>
            <li>2003 онд Боловсрол, соёлын газар</li>
            <li>2013 онд Боловсролын газар</li>
            <li>2015 онд Боловсрол, соёлын газар</li>
            <li>2015 онд Боловсрол, соёлын газар</li>
          </ul>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        {collapses.map((prop, key) => {
          return (
            <ExpansionPanel
              expanded={active === key}
              onChange={handleChange(key)}
              key={key}
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded,
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                classes={{
                  root: classes.expansionPanelSummary,
                  expanded: classes.expansionPanelSummaryExpaned,
                  content: classes.expansionPanelSummaryContent,
                  expandIcon: classes.expansionPanelSummaryExpandIcon,
                }}
              >
                <h4 className={classes.title}>{prop.title}</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                {prop.content}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </GridItem>
    </GridContainer>
  );
}
