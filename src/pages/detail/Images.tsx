import React from "react";
import { DetailProps } from "../../types";

const Images = ({ data }: DetailProps) => {
  console.log(data);

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.picture.map((pic, i) => (
        <img src={pic} key={i} alt={data.description} />
      ))}
    </div>
  );
};

export default Images;
