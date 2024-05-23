import React from "react";
import Profile from "../../assets/home.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Sourav Kumar</span> Frontend Developer
          </h1>
          <p className="home__description">
            A passionate Frontend Developer dedicated to crafting seamless and
            engaging user experiences. With a keen eye for design and a knack
            for turning ideas into reality, I thrive on the intersection of
            aesthetics and functionality.
          </p>
          <Link to={"/about"} className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
