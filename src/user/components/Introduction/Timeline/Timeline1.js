import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Accordion from "components/Accordion/Accordion.js";

import { makeStyles } from "@material-ui/core";
const styles = (theme) => ({
  titleSec: {
    borderBottom: "1px solid blue",
  },
  textSec: {
    textAlign: "justify",
    textIndent: "50px",
  },
  haha: {
    textAlign: "justify",
  },
});

const useStyles = makeStyles(styles);
export default function Timeline1(props) {
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
            Түүхэн замнал
          </h3>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <div>
          <p className={classes.textSec}>
            Булган аймаг 1938 онд байгуулагдахад түүний Гэгээрлийн хэлтэс нь
            дарга, сургуулийн ба бичиг үсгийн байцаагч тус бүр нэгтэй ажиллаж,
            сургуулийн хэргээс гадна ард түмнийг бичиг үсэгт сургах ажил, клуб,
            улаан булан, улаан гэр, кино зэрэг ажлыг удирдаж байжээ. Түүнээс
            хойш дараах нэршлээр нэрлэгдэж байсан байна.
          </p>
          <ul style={{ marginLeft: "5%" }}>
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
      <GridItem xs={12} sm={12} md={12} className={classes.haha}>
        <Accordion
          active={0}
          collapses={[
            {
              title:
                "ШИНЭ ҮЕИЙН БОЛОВСРОЛЫН ТОГТОЛЦОО БҮРЭЛДЭН ТОГТСОН НЬ /1938-1960 ОН/: ",
              content:
                "БНМАУ-ын Ардын Сайд нарын Зөвлөлийн 1937 оны 12-р сарын 12-ны өдрийн\
                33-р тогтоолоор Сэлэнгэ аймгийг Булган Сэлэнгэ хоёр аймаг болгон\
                тусгаарлан байгуулжээ. Манай аймагт 1958-1959 оны хичээлийн жилд сурган\
                хүмүүжүүлэх ухааны кабинет байгуулагдаж, анхны эрхлэгчээр нь МУИС\
                төгссөн Монгол хэл, уран зохиолын багшийн мэргэжилтэй Ишдоржийн Жамсран,\
                заах аргачаар математикийн багшийн курс төгссөн Намсрайн Өлзий нар\
                ажиллаж байжээ. Анх сурган хүмүүжүүлэх ухааны кабинет нэртэй бий болсон\
                энэ байгууллага нэр, хаяг нь өөрчлөгдөн солигдож үйл ажиллагааны цар\
                хүрээ, агуулга чиглэл нь өргөжин өөрчлөгдөж өнөөдрийг хүртэл бие даасан\
                үйл ажиллагаагаа явуулсаар байна. Сургалт заах арга зүйн кабинет болгон\
                өргөтгөж, багш нарын мэргэжлийг дээшлүүлэх сургууль багш нарын тэргүүн\
                туршлага бүтээлч санаачлагыг судлах, сурталчлан дэлгэрүүлэх, эрхлэгч\
                заах аргач нар сургуулиудад очиж ажиллан очсон газраа багш нартайгаа\
                хамтран хичээлд бэлтгэх, хичээлд нь сууж зөвлөгөө өгөх мөн эцэг эх,\
                хөдөлмөрчдөд лекц, яриа хийх зэрэг ажлыг хариуцан гүйцэтгэж иржээ. 1959\
                онд аймаг хотын САЗК-ийн эрхлэгч, арга зүйчдийн семинар Улаанбаатар\
                хотод болж, аймгуудаас ирсэн эрхлэгч, арга зүйчид хоорондоо уулзан\
                танилцаж, ажиллах арга барил, зорилгоо ойлголцож ирсэн гэж энэ\
                байгууллагад ажиллаж байсан ахмадууд олонтаа ярьдаг. Ийнхүү сурган\
                хүмүүжүүлэх ухааны кабинет нь аймгийн Гэгээрлийн хэлтсийн харьяанд шинэ\
                ажлын гараагаа эхэлжээ",
            },
            {
              title: "СОЦИАЛИСТ БҮТЭЭН БАЙГУУЛАЛТЫН ҮЕ  /1961-1990 ОН/:  ",
              content:
                " 1961 онд хуралдсан намын XIV их хурлаас дэвшүүлсэн зорилт, 1963, 1982\
                онд БНМАУ-ын Ардын их хурлын чуулганаар батлагдсан “Сургууль амьдралын\
                холбоог бэхжүүлэн ардын боловсролын системийг цаашид хөгжүүлэх тухай”,\
                “БНМАУ-ын ардын боловсролын хууль”-ийг хэрэгжүүлэхэд тус аймгийн\
                боловсролын байгууллагын бодлого чиглэгдэж Сургалт заах аргын кабинет нь\
                энэ талаар хийгдэж байгаа олон ажилд оролцож байлаа. ЕБС-ийн насны\
                хүүхдийг бүрэн дунд боловсролтой болгох, сургалтын шинэ системийг\
                хэрэгжүүлж, сургалт хүмүүжлийн ажлын материаллаг баазыг бэхжүүлж, багш\
                нарын заах арга барилыг сайжруулж, тэргүүн туршлагыг эзэмшин, “Бүтээлч\
                багшаас бүтээлч хамт олон” болох хөдөлгөөн өрнүүлж ажилласан нь энэ\
                үеийн онцлог юм. 1961-1962 оны хичээлийн жилд аймгийн хэмжээнд 155 багш\
                ажиллаж байсны 89 нь бага ангийн 66 нь дунд ангийн багш байсан болно.\
                1960-аад оны эхэн үед сургалт хүмүүжлийн ажлыг сайн зохион байгуулж\
                байсан багш олон байв. 1988 оны орчмоос СЗАК-ийн үйл ажиллагаа нилээд\
                өргөжиж эхэлсэн бөгөөд 1990-ээд оны эхэнд нийгмийн өөрчлөн байгуулалтын\
                үеэс орон нутгийн гүйцэтгэх засаглалын бүтцэд өөрчлөлт орж урьд нь бие\
                дааж ажиллаж байсан Боловсролын хэлтэс аймгийн Засаг даргын Тамгын\
                газарт очиж Нийгмийн бодлогын хэлтэс болж ажилласнаар боловсролын\
                салбарын олон ажил сургалт арга зүйн байгууллагад хийгдэх болсон.",
            },
            {
              title: "АРДЧИЛАЛ НИЙГМИЙН ШИНЭЧЛЭЛИЙН ҮЕ /1991-2019 ОН/ ",
              content:
                "1990-ээд он бол Монгол улс өөрчлөлт шинэчлэл, шинэ нийгмийн\
                тогтолцоонд шилжсэн шилжилтийн он жилүүд байлаа. Энэ шинэ үеийн эхэнд\
                Ардын боловсролын хэлтэс, Сургалт заах аргын кабинетаас санаачлан\
                шинэлэг хэдэн зүйлийг хийсэн байдаг. Үүнд: Тухайн цаг үед төв,\
                хөдөөгийн сургууль цэцэрлэгүүд хоорондын хэлхээ холбоо бага, хил\
                залгаа сумдын багш нар хоорондын харилцаа тааруу, мэдээлэл\
                солилцдоггүй, аймгийн төв рүү хандсан босоо харилцаа давамгайлж,\
                сургалт семинар , хурал зөвөлгөөн,уралдаан тэмцээн гэх мэт бүх зүйл\
                аймгийн төвд болдог, бүс нутаг доторх сүлжээгүй, албан ёсны босоо,\
                хэвтээ харилцаа байхгүй байв. Ийм нөхцөлд аймгийнхаа сургууль\
                боловсролын байгууллагыг байршлаар нь зүүн, урд, баруун, хойд, төвийн\
                гэсэн 5 бүс болгон зохион байгуулж, 1990 оны намрын багш нарын бага\
                хурал, семинараа бүсэд зохион байгуулж эхлэн улмаар аливаа уралдаан\
                тэмцээн, хурал зөвөлгөөнийг ч бүсэд зохион байгуулдаг болсон байна.\
                Энэ нь улсын хэмжээнд анхдагч арга хэмжээ байсан. Боловсролын салбарт\
                2014-2018 онд нийт 18.9 тэрбум төгрөгийн хөрөнгө оруулалт хийгдсэн\
                бөгөөд энэ нь Монгол улсын Засгийн газар, БСШУЯ, аймаг, орон нутгийн\
                удирдлагаас боловсролын чиглэлээр явуулсан төсөл, хөтөлбөр, олон улсын\
                байгууллага, төрийн бус байгууллагын хамтын үйл ажиллагааны бодит үр\
                дүн билээ. Үүний үр дүнд сургуулийн өмнөх боловсролын хамран сургалт\
                жилээс жилд нэмэгдэн, бага, суурь боловсролын хамран сургалт\
                тогтворжиж, цэцэрлэг, дотуур байрны орны болон хичээлийн байрны\
                суудлын тоо нэмэгдэн, сургалтын орчин, материаллаг бааз сайжирч\
                боловсролын үйлчилгээг чанартай зохион явуулах орчин, нөхцөл бүрдэж\
                байна. 21 дүгээр зууны эхний 20-иод жил бол Булган аймгийн сургууль\
                боловсролын байгууллага, түүнийг захиргааны болон мэргэжил арга зүйн\
                удирдлагаар ханган удирдаж байдаг Боловсрол соёл урлагийн газрын хувьд\
                саатал бэрхшээл, алдаа оноо аль аль нь байсан ч шинэ шатанд боловсорч,\
                бэхжиж хөгжсөн, бүтээн босголт,амжилт бүтээлийн он жилүүд байлаа.\
                Боловсрол соёл урлагийн газар нь өөрийн эзэмшил бүхий газар, агуулах\
                граж, орон сууц, машин, бүрэн тоног төхөөрөмж бүхий ажлын тохилог\
                байртай болсон. Боловсролын салбарын удирдах ажилтан, багш сурган\
                хүмүүжүүлэгчид удаа дараа гадаад дотоодын сургалт семинар, танилцах\
                аялалд хамрагдан,шинэ аргазүйд суралцан, шинэ цагийн оюуны үр шимийг\
                хүртэн эзэмшсэн үе. Сургууль, цэцэрлэгүүд, Боловсрол соёл урлагийн\
                газар нь цөөнгүй хэдэн жилийн санхүү, хөрөнгө оруулалт, эдийн засгийн\
                хүндрэлийг хол орхиж, орчин цагийн барилга байгууламж, шаардлагатай\
                техник хэрэгсэл, тоног төхөөрөмжөөр хангагдан материаллаг баазын хувьд\
                бэхжин хөгжсөн үе юм.",
            },
          ]}
        />
      </GridItem>
    </GridContainer>
  );
}
