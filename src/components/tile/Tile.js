import React from "react";

export const Tile = ({value}) => {
  const array = Object.value(value);
  return (
    <div className="tile-container">
      {
        array &&
        array.map(
          (data, index) => {
            if(index === 0) {
              return <p className="tile-title">{data}</p>
            } else {
              return <p className="tile">{data}</p>
            }
          }
        )
      }
    </div>
  );
};
