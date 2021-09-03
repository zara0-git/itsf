import React from "react";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem.js";
//images

import butets from "assets/img/sidebar/butets.jpg";
//
import { makeStyles } from "@material-ui/core";
const styles = (theme) => ({
  textSec: {
    textAlign: "justify",

    padding: " 10px",
    borderRadius: " 20px",

    textIndent: "50px",
  },

  butetsSec: {
    textAlign: "center",
  },
  titleSec: {
    marginLeft: " 10px",
    borderBottom: "1px solid blue",
  },
});

const useStyles = makeStyles(styles);
export default function Structure(props) {
  const classes = { ...useStyles() };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div
          style={{
            position: "relative",
            margin: "30px 0",
            borderTop: "1px solid #2CA02C",
          }}
        >
          <h3
            style={{
              position: "absolute",
              top: "-17px",
              left: 0,
              right: "auto",
              bottom: "auto",
              display: "inline-block",
              margin: 0,
              padding: "4px 12px",
              backgroundColor: "#2CA02C",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "400",
              textTransform: "uppercase",
            }}
          >
            БОЛОВСРОЛ, СОЁЛ УРЛАГИЙН ГАЗРЫН ОРОН ТОО
          </h3>
        </div>
      </GridItem>
      {/*      <GridItem xs={12} sm={4} md={4}>
        <img src={taniltsuulga} width="100%" />
      </GridItem>
    
  */}
      <GridItem xs={12} sm={12} md={12}>
        <p className={classes.textSec}>
          Одоогийн Боловсрол, соёл, урлагийн газар нь байгууллагын дарга, албаны
          дарга, мэргэжилтэн, нягтлан бодогч, нярав, архив албан хэрэг
          хөтлөлтийн ажилтан, үйлчлэгч, жолооч, сахиул гэсэн нийт 20 орон тоотой
          ажиллаж байна.
        </p>
        <p className={classes.textSec}>
          Үүнээс Магистр-8, Магистрант-5, АБТА-7 ажиллаж байна. Бүтцийн хувьд
          Удирдлага төлөвлөлт, захиргаа аж ахуйн алба, Сургалт судалгаа арга
          зүйн алба гэсэн 2 алба болж ажилладаг ба төрийн захиргааны албан
          тушаалд 14, төрийн үйлчилгээний албан хаагч 6 ажилтан ажиллаж байна.
          Насны хувьд 30-35 насны 6, 36-40 насны 3, 41-45 насны 4, 46-50 насны
          1, 51-55 насны 3, 56-60 насны албан хаагч 3 байна.
        </p>
        <p className={classes.textSec}>
          Нийт албан хаагчдын 35 хувь нь эрэгтэй /7/, 65 хувийг нь эмэгтэй албан
          хаагч эзлэж байна. Насны хувьд 30-40 хүртэл насны залуучууд 50 орчим
          хувийг эзлэж байна.
        </p>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <div
          style={{
            position: "relative",
            margin: "30px 0",
            borderTop: "1px solid #1F77B4",
          }}
        >
          <h3
            style={{
              position: "absolute",
              top: "-17px",
              left: 0,
              right: "auto",
              bottom: "auto",
              display: "inline-block",
              margin: 0,
              padding: "4px 12px",
              backgroundColor: "#1F77B4",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "400",
              textTransform: "uppercase",
            }}
          >
            БОЛОВСРОЛ, СОЁЛ УРЛАГИЙН ГАЗРЫН БҮТЭЦ
          </h3>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} className={classes.butetsSec}>
        <img src={butets} width="80%" />{" "}
      </GridItem>
    </GridContainer>
  );
}
