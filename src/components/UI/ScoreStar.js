import React, { useEffect, useState } from "react";

export default function ScoreStars(props) {
  const [stars, setStars] = useState(null);
  const starCalculator = (score) => {
    if (score > 18 && score <= 20) return 3;
    if (score > 15 && score <= 17) return 2;
    if (score >= 10 && score <= 15) return 1;
    if (score < 10) return 0;
  };
  useEffect(() => {
    setStars(starCalculator(props.score));
  }, []);

  return (
    <div className="star-container">
      <div className="empty-stars">
        <img className="score-star" src="./img/star.png" alt="" />
        <img
          className="score-star score-star-push"
          src="./img/star.png"
          alt=""
        />
        <img className="score-star" src="./img/star.png" alt="" />
      </div>

      <div className="filled-stars">
        <img
          className="score-star"
          src="./img/star-filled.png"
          alt=""
          style={{ visibility: stars < 1 ? "hidden" : "" }}
        />
        <img
          className="score-star score-star-push"
          src="./img/star-filled.png"
          alt=""
          style={{ visibility: stars < 2 ? "hidden" : "" }}
        />
        <img
          className="score-star"
          src="./img/star-filled.png"
          alt=""
          style={{ visibility: stars < 3 ? "hidden" : "" }}
        />
      </div>
    </div>
  );
}
