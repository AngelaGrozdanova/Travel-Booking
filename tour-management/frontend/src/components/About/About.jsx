import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
// import "./about.css";
import Newsletter from "../../shared/Newsletter";
import ServiceList from "../../services/ServiceList";
import Testimonials from "../Testimonial/Testimonials";
import experienceImg from "../../assets/images/experience.png";
import Subtitle from "../../shared/Subtitle";
import CommonSection from "../../shared/CommonSection";
import video from "../../assets/images/video-travel.mp4";

const About = () => {
  return (
    <>
      <CommonSection title={"About"} />
      <section className="about">
        <section>
          <Container>
            <Row>
              <Col lg="3">
                <h5 className="services__subtitle">What we serve</h5>
                <h2 className="services__title">We offer our best services</h2>
              </Col>
              <ServiceList />
            </Row>
          </Container>
        </section>

        <section>
          <video
            src={video}
            style={{
              width: "90%",
              height: "auto",
              margin: "0 auto",
              display: "block",
              borderRadius: "20px",
            }}
            controls
          />
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="6">
                <div className="experience__content">
                  <Subtitle subtitle={"Experience"} />
                  <h2>
                    With our all experience <br /> we will serve you
                  </h2>
                  <p>
                    Trust our experience to provide you with seamless,
                    well-organized trips that will leave you speechless.
                    <br />
                    Explore the world with us and create stories worth sharing
                    for a lifetime!
                  </p>
                </div>

                <div className="counter__wrapper d-flex align-items-center gap-5">
                  <div className="counter__box">
                    <span>12k+</span>
                    <h6>Successful trip</h6>
                  </div>
                  <div className="counter__box">
                    <span>2k+</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className="counter__box">
                    <span>2</span>
                    <h6>Years experience</h6>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="experience__img">
                  <img src={experienceImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Testimonials />
        <Newsletter />
      </section>
    </>
  );
};

export default About;
