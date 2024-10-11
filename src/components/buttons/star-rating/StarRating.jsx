import React from "react";
import { StarFill } from "react-bootstrap-icons";

const StarRating = ({ count = 5, color = "text-yellow-400" }) => {
  return (
    <div className="flex">
      {[...Array(count)].map((_, i) => (
        <span key={i}>
          <StarFill className={`text-sm ${color}`} />
        </span>
      ))}
    </div>
  );
};

export default StarRating;