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

import MethodologysGrid from "admin/components/Methodologys/MethodologysGridSelect";
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
            <MethodologysGrid
              RootFilter={[
                ["methodology_type", "=", "Математик, мэдээлэл зүй"],
                "or",
                ["methodology_type", "=", "Физик"],
                "or",
                ["methodology_type", "=", "Хими, биологи"],
                "or",
                ["methodology_type", "=", "Газар зүй"],
                "or",
                ["methodology_type", "=", "Түүх, нийгмийн ухаан"],

                "or",
                ["methodology_type", "=", "Монгол хэл, уран зохиол"],
                "or",
                ["methodology_type", "=", "Монгол бичиг"],
                "or",
                ["methodology_type", "=", "Гадаад хэл"],
                "or",
                ["methodology_type", "=", "Дуу хөгжим"],
                "or",
                ["methodology_type", "=", "Биеийн тамир"],
                "or",
                ["methodology_type", "=", "Эрүүл мэнд"],
                "or",
                ["methodology_type", "=", "Дүрслэх урлаг"],
                "or",
                ["methodology_type", "=", "Дизайн тенологи, зураг зүй"],
              ]}
              typeId="middle"
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
