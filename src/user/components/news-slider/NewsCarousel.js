import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "user/components/news-slider/CarouselItem.js";
import helper from "admin/helper/index";
import DivLoading from "admin/components/DivLoading";
import server from "config/server";
import defaultImage from "assets/img/image_placeholder.jpg";
export default function (props) {
  const [NewsLists, setNewsLists] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const url = props.typeId ? props.typeId : null;

  const handleChange = (event, value) => {
    setPage(value);
    GetData(null, 5, value);
  };

  useEffect(() => {
    GetData(null, 5, 1);
  }, []);

  const GetData = async (SearchFilter, take, value) => {
    setIsLoading(true);
    var skip = (value - 1) * 5;
    var take = take;
    var Filter = ["type", "=", "Онцгой"];
    //var Filter = null;
    var Sort = [{ selector: "created_at", desc: true }];

    Filter = SearchFilter
      ? Filter
        ? [Filter, "and", SearchFilter]
        : SearchFilter
      : Filter;

    var select = `["*", "CreateUsers:name"]`;
    let params = helper.Helper.GetRequest({
      filter: Filter,
      sort: Sort,
      take: take,
      skip: skip,
      group: null,
    });
    params += `select=${select}&`;
    params = params.slice(0, -1);

    var ReqData = "";
    ReqData += params;

    var Response = await server.CallService({
      Method: "GET",
      Url: `home/news` + ReqData,
    });

    if (
      Response &&
      Response.data &&
      Response.data.Data &&
      Response.data.Success
    ) {
      setNewsLists(Response.data.Data);

      setCnt(Response.data.Total);
    }
    setIsLoading(false);
  };
  const customRenderThumb = (children) =>
    children.map((item, key) => {
      return (
        <img className="thumbImg" src={item.props.img} key={"thumb-" + key} />
      );
    });

  require("react-responsive-carousel/lib/styles/carousel.min.css");
  require("./style.css");

  return (
    <div>
      <div style={{ position: "relative" }}>
        {isLoading ? <DivLoading /> : null}
      </div>
      <Carousel
        thumbWidth="25%"
        infiniteLoop={true}
        renderThumbs={customRenderThumb}
        showArrows={true}
        showStatus={false}
      >
        {NewsLists.map((item, key) => {
          return (
            <CarouselItem
              img={
                item.main_image
                  ? server.BaseFileUrl + `news/` + item.main_image
                  : defaultImage
              }
              title={item.title}
              id={item.id}
              key={"item-" + key}
              date={item.created_at}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
