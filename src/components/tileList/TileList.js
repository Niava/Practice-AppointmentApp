import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({objArr}) => {
  return (
    <div>
      { objArr &&
        objArr.map((value, key) => <Tile value={value} key={key} />)  
      }
    </div>
  );
};
