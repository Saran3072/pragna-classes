import React from "react";
import Title from "../../common/title/Title";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="Welcome to Pragna Classes"
              title="One stop solution for IIT Coaching"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae architecto impedit voluptas vel unde provident fugiat
              sit? Sint excepturi itaque quis inventore, mollitia dolores
              aperiam deserunt, debitis voluptas sequi odio?
            </p>
          </div>
          <div className="button">
            <button className="primary-btn">
              GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
            </button>
            <button>
              VIEW PROGRAMS <i className="fa fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
