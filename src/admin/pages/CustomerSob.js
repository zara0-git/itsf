import React from "react";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
// my components

import CustomerGrid from "admin/components/Customer/CustomerGrid";
export default function () {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
          </CardHeader>
          <CardBody>
            <CustomerGrid
              RootFilter={["customer_type", "=", "sob"]}
              typeId="sob"
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
