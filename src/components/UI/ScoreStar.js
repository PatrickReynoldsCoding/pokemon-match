import React from "react";

export default function ScoreStars(props) {
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
          style={{ visibility: props.score < 1 ? "hidden" : "" }}
        />
        <img
          className="score-star score-star-push"
          src="./img/star-filled.png"
          alt=""
          style={{ visibility: props.score < 2 ? "hidden" : "" }}
        />
        <img
          className="score-star"
          src="./img/star-filled.png"
          alt=""
          style={{ visibility: props.score < 3 ? "hidden" : "" }}
        />
      </div>
    </div>
  );
}
