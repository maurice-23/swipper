import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./styles.css";
import "./font-6/css/all.css";
import CountUp from "react-countup";
import datas from "./swipperData";
const MySwiperComponent = () => {
  return (
    <Swiper
      className="container"
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        400: { slidesPerView: 1 },
        720: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
        2000: { slidesPerView: 4 },
      }}
    >
      {datas.map((single, i) => {
        var rate = single.rates;
        switch (rate) {
          case 1:
            rate = (
              <p>
                <i className="fa fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </p>
            );
            break;
          case 2:
            rate = (
              <p>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </p>
            );
            break;
          case 3:
            rate = (
              <p>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </p>
            );
            break;
          case 4:
            rate = (
              <p>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="far fa-star"></i>
              </p>
            );
            break;
          case 5:
            rate = (
              <p>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </p>
            );
            break;
          default:
            rate = <p>No rates</p>;
            break;
        }

        const handleClick = () => {
          prompt("Click found")
        }
        return (
          <SwiperSlide className="card" key={i}>
            <img src={single.pic} height={100} alt={single.name + " picture"} onClick={handleClick}/>
            <h2>{single.name}</h2>
            <p>{single.job}</p>
            <span>Rates: {rate}</span>
          </SwiperSlide>
        );
      })}
      <SwiperButtons />
    </Swiper>
  );
};

export default MySwiperComponent;
const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="buttons">
      <button onClick={() => swiper.slidePrev()}>{"<"}</button>
      <button onClick={() => swiper.slideNext()}>{">"}</button>
    </div>
  );
};
