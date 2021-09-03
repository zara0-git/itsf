import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import FileList from "../PdfList/FileList";
import { makeStyles } from "@material-ui/core";
import { MethodologyList } from "assets/store/MethodologyList";
const styles = (theme) => ({
  item: {
    width: "calc(100%-30px)",
    border: "1px solid #8f8f8f",
    display: "flex",
    borderRadius: "20px",
    overflow: "hidden",
    padding: "10px",
    height: "50px",
    alignItems: "center",
    margin: "10px",
  },
  link: {
    color: "black",
    fontSize: "12px",
    fontWeight: "500",
    margin: "10px",
    "&:hover ": {
      color: "#F44336",
    },
    "&:focus ": {
      color: "rgb(76,175,80)",
    },
  },
  Tit: {
    borderBottom: "1px solid blue",
  },
});

const useStyles = makeStyles(styles);
const wd = window.screen.width;
var w1 = 0;

export default function Methodology() {
  const classes = { ...useStyles() };
  const { id } = useParams();
  const [MethodDetail, setMethodDetail] = React.useState(null);

  React.useEffect(() => {
    console.log({ id });
    var Detail = MethodologyList.filter((s) => s.id + "" === id)[0];

    setMethodDetail(Detail);
  }, [id]);
  if (wd < 500) {
    w1 = 955;
  } else w1 = 445;
  return (
    <GridContainer>
      {MethodologyList
        ? MethodologyList.map((item, key) => {
            return (
              <GridItem xs={12} sm={4} md={4}>
                <div className={classes.item}>
                  <img
                    src={item.img}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <Link
                    to={"/home/methodology/" + item.id}
                    className={classes.link}
                    onClick={() =>
                      window.scrollTo({
                        top: w1,

                        left: 100,
                        behavior: "smooth",
                      })
                    }
                  >
                    <p>{item.name}</p>
                  </Link>
                </div>
              </GridItem>
            );
          })
        : null}

      <GridItem xs={12} sm={12} md={12}>
        {MethodDetail ? (
          <>
            <h5 className={classes.Tit}>{MethodDetail.name}</h5>
            <FileList
              name={MethodDetail.name}
              RootFilter={["methodology_type", "=", `${MethodDetail.name}`]}
              typeId="methodology"
            />
          </>
        ) : null}
      </GridItem>
    </GridContainer>
  );
}
