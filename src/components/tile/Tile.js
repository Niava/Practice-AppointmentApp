import React from "react";

export const Tile = ({value}) => {
  const array = Object.values(value);
  return (
    <div className="tile-container">
      {
        array &&
        array.map(
          (data, index) => {
            if(index === 0) {
              return <p key={index} className="tile-title">{data}</p>
            } else {
              return <p key={index} className="tile">{data}</p>
            }
          }
        )
      }
    </div>
  );
};
