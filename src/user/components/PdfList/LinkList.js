import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import Download from "@material-ui/icons/GetApp";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";
import Table from "user/components/PdfList/Table";

const useStyles = makeStyles(styles);

export default function LinkList(props) {
  const rules = props.rules;
  const name = props.name;
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  const fillButtons = [
    { color: "info", icon: Visibility },
    { color: "success", icon: Download },
  ].map((prop, key) => {
    return (
      <Button color={prop.color} className={classes.actionButton} key={key}>
        <prop.icon className={classes.icon} />
      </Button>
    );
  });

  const roundButtons = [{ color: "info", icon: Visibility }].map(
    (prop, key) => {
      return (
        <Button
          round
          color={prop.color}
          className={classes.actionButton + " " + classes.actionButtonRound}
          key={key}
        >
          <prop.icon className={classes.icon} />
        </Button>
      );
    }
  );
  const tableData = [];

  rules.map((value, key) => {
    tableData.push([
      key + 1,
      value.Name,
      <a href={value.Url} target="_blank">
        {roundButtons}
      </a>,
    ]);
  });
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <h4 className={classes.cardIconTitle}>{name}</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHead={["#", "Нэр", "Үзэх"]}
              tableData={tableData}
              customCellClasses={[classes.center, classes.right, classes.right]}
              customClassesForCells={[0, 2, 5]}
              customHeadCellClasses={[
                classes.center,
                classes.right,
                classes.right,
              ]}
              customHeadClassesForCells={[0, 2, 5]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
