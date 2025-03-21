import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoints: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoints: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          "Booking my trip through this platform was the best decision! The
          seamless experience, detailed itineraries, and local tips helped me
          explore the breathtaking beaches of Bali like never before."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Traveler</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "From the vibrant streets of Tokyo to the serene temples of Kyoto,
          this website made my journey unforgettable. The insider guides and
          hotel recommendations were spot on!"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Adventure Seeker</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "Exploring the Swiss Alps was a dream come true, and this site helped
          me plan everything effortlessly. From scenic train rides to cozy
          mountain lodges, it was simply magical!"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Nature Enthusiast</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "I always wanted to explore Santorini, and thanks to this platform, I
          found the best spots to watch the sunset, hidden local restaurants,
          and charming boutique hotels. Highly recommend!"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Luxury Traveler</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
