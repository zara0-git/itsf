import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
// my components

import TechnologyFundsForm from "admin/components/TechnologyFunds/TechnologyFundsForm";
// history
import History from "History.js";

import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();

  const [LoginLoading, setLoginLoading] = React.useState(false);

  var FormRef = React.useRef();

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
            <TechnologyFundsForm
              ref={(ref) => (FormRef = ref)}
              typeId="success"
            />
          </CardBody>
          <CardFooter>
            <Button
              color="info"
              onClick={() => {
                History.push("/admin/news");
              }}
              size="sm"
            >
              <i
                className="fas fa-chevron-left"
                style={{ marginRight: "12px" }}
              ></i>
              {t("Буцах")}
            </Button>

            <div
              style={{
                position: "relative",
                display: "inline-block",
                float: "right",
                width: "auto",
              }}
            >
              <Button
                color="success"
                onClick={() => {
                  setLoginLoading(true);
                  FormRef &&
                    FormRef.Save(({ Data }) => {
                      setLoginLoading(false);
                    });
                }}
                size="sm"
                disabled={LoginLoading}
              >
                <i className="fas fa-save" style={{ marginRight: "12px" }}></i>
                {t("Хадгалах")}
              </Button>
              {LoginLoading && (
                <CircularProgress
                  size={24}
                  style={{
                    color: "#008a24",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: -12,
                    marginLeft: -12,
                  }}
                />
              )}
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
