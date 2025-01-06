import React, { useState } from "react";
import "./ListSliderContent.css";
import { Link } from "react-router-dom";

export const ListSliderContent = ({ activeEl, animation }) => {
  let activeElClass = ["about-info__card-img"];
  if (activeEl.id == "sites") {
    activeElClass.push("sites");
  } else if (activeEl.id == "apps") {
    activeElClass.push("apps");
  } else if (activeEl.id == "games") {
    activeElClass.push("games");
  }

  return (
    <div
      className="relative flex items-center justify-center gap-[150px] transition-all"
      style={animation}
    >
      <div className={activeElClass.join(" ")}>
        <img src={activeEl.img} alt={activeEl.imgAlt} />
      </div>
      <div className="max-w-[600px]">
        <h3 className="title">{activeEl.title}</h3>
        <h4 className="text-[30px] font-bold mb-[20px]">
          — {activeEl.description}
        </h4>
        <p className="mb-[20px]">{activeEl.text}</p>
        <Link to={activeEl.link} className="button">
          Подробнее
        </Link>
      </div>
    </div>
  );
};
