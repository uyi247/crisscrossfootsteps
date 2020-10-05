import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <h1 className="title">
        Hi! My name is Osa Obas and I’ve been traveling the world for ten years
        and counting.{" "}
      </h1>
      <img src={require("../../images/about1.jpg")} />
      <h1>Fufilling my teenage dreams </h1>
      <p>
        For as long as I can remember I’ve been obsessed with the idea of
        travel. I was always that person who was forever daydreaming of foreign
        lands and unfamiliar cultures; coming up with travel itineraries that
        would challenge my perceptions and help me gain a deeper understanding
        of the world. During every spare moment, you’d find me browsing
        guidebooks and researching faraway lands. I was convinced I’d never have
        the opportunity to visit them. I was always happiest whenever I was
        exploring somewhere new. Over the last ten years, I’d spend each year
        counting down to my next holiday and then as soon as I arrived, dread
        returning home. In 2009, I made a huge decision. I started putting
        together a tentative plan that would allow me to build a life I didn’t
        want to escape from. I knew that exploring new countries was something
        that made me happy, I just didn’t know how to do it more than once a
        year. It didn’t seem possible at the time but i have been able to do
        that in some miraculous way !
      </p>
      <img src={require("../../images/about2.jpg")} />
      <h1>Touring the world, one country at at time !</h1>
    </div>
  );
};
export default AboutPage;
