import React from "react";
import CardItem from "./carditem"

import image1 from "./ubb.png";
import image2 from "./sc.png";


const cards = [
  {
    id: 1,
    title: "University of Babes-Bolyai",
    image: image1,
    text: "I graduated from the Faculty of Economics and Business Management, Management Specialization in Cluj-Napoca"
  },
  {
    id: 2,
    title: "Informal School of IT",
    image: image2,
    text: "I soon enrolled in the Informal School of IT where I'm studying front end development. In two months with a lot of work and ambition I managed to create a solid foundation in HTML,CSS, Javascript and some of the Javascript frameworks, like Angular and ReactJS "
  }
  
];

const CardList = () => (
  <div
    className="container d-flex justify-content-center align-items-center"
    style={{ marginTop: "10em" }}
  >
    <div className="row justify-content-center">
      {cards.map(({ title, image, text, id }) => (
        <div className="col-2 col-md-6" key={id}>
          <CardItem imageSource={image} title={title} text={text} />
        </div>
      ))}
    </div>
  </div>
);

export default CardList;
