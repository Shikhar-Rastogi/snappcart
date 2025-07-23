import React, { useEffect, useState } from "react";
import "./slider.css";

import slider1 from "../assets/img/slider/slider-1.jpg";
import slider2 from "../assets/img/slider/slider-2.jpg";
import slider3 from "../assets/img/slider/slider-3.jpg";
import { Link } from "react-router-dom";
const slides = [
  {
    background: slider1,
    heading: "Handmade \n Hand carved Coffee",
    paragraph:
      "As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.",
  },
  {
    background: slider2,
    heading: "Think Different & \n Do it otherwise",
    paragraph:
      "Clarity is a dynamic process that adapts to changes in how people read.",
  },
  {
    background: slider3,
    heading: "High Beam \n by Tom Chung",
    paragraph:
      "High Beam is an adjustable desk or shelf light that offers a wide variety of lighting possibilities.",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider__area p-relative">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`single-slider slider__height d-flex align-items-center ${
              index === currentIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                  <div className="slider__content text-white">
                    <h2>
                      {slide.heading.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h2>
                    <p>{slide.paragraph}</p>
                    <Link to="/shop" className="os-btn os-btn-2">
                      Discover now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="slider-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
