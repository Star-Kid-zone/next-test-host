"use client"
import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


interface Card {
  end: number; // Change from string to number
  start?: number | undefined; // Change from string to number
  count: number; // Change from string to number
  title: string;
}

const cards: Card[] = [
  {
    start : 0,
    end :100,
    count: 432,
    title: "Completed Event",
  },
  {
    start : 0,
    end :100,
    count: 133,
    title: "Game Completed",
  },
  {
    start : 0,
    end :100,
    count: 641,
    title: "Completed Fund",
  },
  {
    start : 0,
    end :100,
    count: 313,
    title: "Completed Ticket",
  },
];

interface CardItemProps {
  item: Card;
}

const CardItem: React.FC<CardItemProps> = ({ item }) => (
  <>
    <h3 className="text-[45px] font-black mb-2" data-aos="fade-right">
      <CountUp start={item.start || 0} end={item.count}   duration={2.75} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
    </h3>
    <h5 className="text-lg font-medium opacity-80">{item.title}</h5>
  </>
);

const Numbers6: React.FC = () => {
  return (
    <section>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center text-center max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-[45px] font-bold mb-6">
            Crud much unstint far camel inanimately.
          </h1>
          <p className="text-lg opacity-80 max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod
            perferendis nihil cupiditate aliquid qui exercitationem labore
            veritatis eaque nobis libero earum.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto text-center mt-12">
          {cards.map((item, i) => (
            <div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
              <CardItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers6;
