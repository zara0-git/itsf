import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import React from "react";
import zurag from "assets/img/default-avatar.png";

import { makeStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  container: {},
  imgSec: {
    "&:img": {
      width: "200px",
    },
  },
  textSec: {
    textAlign: "justify",
    textIndent: "50px",
  },
  headerSec: {},
  h3Sec: {
    marginLeft: "10px",
  },
  titleSec: {
    borderBottom: "1px solid #1F77B4",
    textTransform: "uppercase",
  },
});

const useStyles = makeStyles(styles);
export default function Greeting(props) {
  const classes = { ...useStyles() };
  return (
    <GridContainer className={classes.container}>
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
            Даргын мэндчилгээ
          </h3>
        </div>
      </GridItem>
      <GridItem xs={12} sm={4} md={4}>
        <div className={classes.imgSec}>
          <br />
          <br />
          <img src={zurag} width="100%"></img>
        </div>
      </GridItem>
      <GridItem xs={12} sm={8} md={8}>
        <h4 className={classes.titleSec}>БСУГ-ын ДАРГА Б.БАТБОЛД</h4>
        <br />
        <p className={classes.textSec}>
          Монгол Улсад боловсрол, соёл, урлагийг хөгжүүлэх, өсвөр үеийг сурган
          хүмүүжүүлэх, төлөвшүүлэх ариун үйлсэд зүрх сэтгэл, оюун ухаан, хүч
          хөдөлмөрөө зориулж буй багш сурган хүмүүжүүлэгчид, оюутан, залуучууд,
          эцэг эхчүүд, ажиллагсад та бүхэндээ өмнийн цэнхэр говийн БСУГ-ын хамт
          олны нэрийн өмнөөс болон хувиасаа аз жаргал, эрүүл энх, амжилт
          бүтээлийн дээдийг хүсэн ерөөж мэндчилж байна.
        </p>
        <p className={classes.textSec}>
          Манай байгууллагын албан ёсны цахим хуудсаар зочилж буй танд төр
          засаг, орон нутгийн бодлого, Засаг даргын боловсрол, соёл, урлагийн
          чиглэлийн зорилтуудыг хэрэгжүүлэх явц, иргэд болон байгууллагуудад
          соёл, урлагийн чиглэлийн төрийн үйлчилгээг авч, хүргэж буй олон талт
          ажлуудын талаарх мэдээллүүдийг цаг тухайд нь шуурхай хүргэх болно.
          Мэдлэг мэдээллийн хязгааргүй орон зайд боломжийг олж авч буй таныг
          урлагийн тэнгэр Янжинлхам бурхан өнө мөнхөд ивээх болтугай…
        </p>
      </GridItem>
    </GridContainer>
  );
}
