import React from "react";
import BikeDescription from "./BikeDescription";
import Slider from "react-slick";
const ModalCarousal = () => {
  const bikeData = [
    {
      id: 1,
      name: "Kuber Electric Juniper",
      price: 22999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike1.jpg",
    },
    {
      id: 2,
      name: "Kuber Electric Festiva",
      price: 20999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike2.jpg",
    },
    {
      id: 3,
      name: "Kuber Electric Vanos",
      price: 18999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike3.jpg",
    },
    {
      id: 4,
      name: "Kuber Electric Studio",
      price: 18999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike4.jpg",
    },
    {
      id: 2,
      name: "Kuber Electric Festiva",
      price: 20999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike2.jpg",
    },
    {
      id: 3,
      name: "Kuber Electric Vanos",
      price: 18999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike3.jpg",
    },
    {
      id: 4,
      name: "Kuber Electric Studio",
      price: 18999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike4.jpg",
    },
    {
      id: 2,
      name: "Kuber Electric Festiva",
      price: 20999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike2.jpg",
    },
    {
      id: 3,
      name: "Kuber Electric Vanos",
      price: 18999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike3.jpg",
    },
    {
      id: 4,
      name: "Kuber Electric Studio",
      price: 18999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike4.jpg",
    },
    {
      id: 2,
      name: "Kuber Electric Festiva",
      price: 20999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike2.jpg",
    },
    {
      id: 3,
      name: "Kuber Electric Vanos",
      price: 18999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike3.jpg",
    },
    {
      id: 4,
      name: "Kuber Electric Studio",
      price: 18999,
      description: "City speed variant with 15km/hr",
      imgUrl: "images/bike4.jpg",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {bikeData.map((data) => (
          <BikeDescription data={data} />
        ))}
      </Slider>
    </div>
  );
};

export default ModalCarousal;
