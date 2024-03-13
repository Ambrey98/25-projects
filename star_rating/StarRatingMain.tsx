import { useEffect, useMemo, useState } from "react";
import "./StarRatingMain.scss";

export default function StarRatingMain() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const onHandleRating = (index: number) => {
    setRating(index);
  };

  const onHandleMouseMove = (index: number) => {
    setHover(index);
  };

  const onHandleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div>
      <h1>Rate me daddy</h1>
      {[...Array(5)].map((_, i) => {
        i += 1;

        return (
          <span
            key={i}
            className={`fa fa-star ${
              (hover || rating) >= i ? "checked" : "unchecked"
            }`}
            onClick={() => onHandleRating(i)}
            onMouseMove={() => onHandleMouseMove(i)}
            onMouseLeave={() => onHandleMouseLeave}
          ></span>
        );
      })}
    </div>
  );
}
