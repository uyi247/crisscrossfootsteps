import React from "react";
import "./homeChildItem.css";

const HomeChild = () => {
  const paragraphs = [
    {
      id: 1,
      text:
        " It was back in 2009, when I left home with a one-way ticket in hand. Everyone told me I was making a huge mistake. At the time, I had zero travel experience. I suffered from an anxiety disorder, was concerned about everything, and had just had my heart broken.",
    },
    {
      id: 2,
      text:
        " Like a lot of people, I hoped travel would solve everything. I set off convinced my trip would be all about incredible, life-changing moments; ones full of sunsets and rainbows and meaningful experiences. Instead, I stumbled headfirst into disaster.",
    },
    {
      id: 3,
      text:
        "Over the past ten years of travel, I’ve avoided been scammed in India, robbed in Brazil, while I’ve face-planted into a sand dune in Abu Dhabi amongst other notable events. It’s not hard to believe, but my luck is the best thing to ever happen to me on my travels.",
    },
    {
      id: 5,
      text:
        "On Criss Cross Blog, I will show that transformation through travel is possible, even when you feel as though you’re the unluckiest traveler in the world. I’m a different person to the one who stepped on that plane nine years ago. I’ve kicked my anxiety disorder to the curb, built up my confidence, and learned a ton about how to travel safely, wisely, and adventurously in the process.",
    },
    {
      id: 6,
      text:
        "Travel transformed my life. Let me show you how it can change yours, too. Learn from my mistakes, find the courage to follow your dreams, and laugh at my misfortune. Let me show you how not to travel the world.",
    },
  ];
  return (
    <div className="home_child_container">
      <img src={require("../../../images/homechild.jpg")} />
      <div className="paragraph_container">
        {paragraphs.map((item) => {
          return <p key={item.id}>{item.text} </p>;
        })}
      </div>
    </div>
  );
};

export default HomeChild;
