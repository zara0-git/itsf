import React from "react";

import GridContainer from "components/Grid/GridContainer";

import NavPills from "user/components/customComponents/CustomTab";

//data\
import { EBSList } from "assets/store/EBSList";
import { makeStyles } from "@material-ui/core/styles";
import AllNewsList from "../news/newsList/AllNewsList";
import NewsList from "../news/newsList/NewsList";
const styles = (theme) => ({
  haha: {
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  },
  imgCont: {},
  text: {
    textAlign: "justify",
    textIndent: "50px",
    padding: " 10px",
  },
});

const useStyles = makeStyles(styles);

export default function EBS(props) {
  var tabs = [];
  const classes = { ...useStyles() };
  React.useEffect(() => {}, []);

  tabs.push(
    {
      tabButton: "Онцлох мэдээ",

      tabContent: (
        <span>
          <AllNewsList
            RootFilter={["type", "=", "Онцгой"]}
            typeId="news"
            name="Онцлог мэдээ"
          />
        </span>
      ),
    },
    {
      tabButton: "Зөвлөгөө",

      tabContent: (
        <span>
          <AllNewsList typeId="advice" name="Зөвлөгөө" />
        </span>
      ),
    },
    {
      tabButton: "Шинэ мэдээ",

      tabContent: (
        <span>
          <AllNewsList
            RootFilter={[
              ["type", "=", "Онцгой"],
              "or",
              ["type", "=", "Зураг"],
              "or",
              ["type", "=", "Видео"],
              "or",
              ["type", "=", "Цаг үе"],
            ]}
            typeId="news"
            name="Шинэ мэдээ"
          />
        </span>
      ),
    }
  );

  return (
    <GridContainer>
      <NavPills color="info" vertical tabs={tabs} />
    </GridContainer>
  );
}
