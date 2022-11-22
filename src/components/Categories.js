import React, { useRef, useEffect, useState } from "react";
import Playlists from "./Playlists";

const Categories = () => {
  const [limiter, setLimiter] = useState(0);
  const mainInnerRef = useRef();
  const dataCategories = [
    {
      id: 1,
      name: "Focus",
      tagline: "Music to help you concentrate",
    },
    {
      id: 2,
      name: "Mood",
      tagline: "Playlists to match your mood",
    },
    {
      id: 3,
      name: "Soundtrack your home",
      tagline: "",
    },
    {
      id: 4,
      name: "Kick back this Sunday...",
    },
  ];

  useEffect(() => {
    const handleWindowResize = () => {
      const calculation = Math.floor(
        mainInnerRef.current.getBoundingClientRect().width / 195
      );

      setLimiter(calculation);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="mainInner" ref={mainInnerRef}>
      {dataCategories.map((category, id) => (
        <div className="cardsWrap" key={id}>
          <div className="categoryText">
            <h2>{category.name}</h2>
          </div>
          <p className="subText">{category.tagline}</p>
          <Playlists category_id={category.id} limiter={limiter} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
