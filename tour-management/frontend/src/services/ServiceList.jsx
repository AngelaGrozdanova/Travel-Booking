import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Get real-time weather updates to plan your trip with confidence.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Explore destinations with expert guides for an immersive experience.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Tailor your journey to match your preferences for a perfect getaway.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
