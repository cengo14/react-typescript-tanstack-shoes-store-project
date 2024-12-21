import React from "react";
import { DetailProps } from "../../types";
import Badge from "../../components/list/badge";

const Head = ({ data }: DetailProps) => {
  let price = data.price;
  if (data.discount) {
    price = (data.price / 100) * data.discount;
    price = data.price - price;
  }
  return (
    <div>
      <Badge shoe={data} />
      <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-[55px]">
        {data.name}
      </h1>
      <p className="text-[20px] md:text-[24px] mt-4 flex gap-2 items-center">
        <span
          className={`${
            data.discount ?? "hidden"
          } font-semibold bg-yellow rounded-md p-1`}
        >
          ${price}
        </span>
        <span
          className={`${data.discount && "line-through"} font-semibold p-1`}
        >
          ${data.price}
        </span>
      </p>
    </div>
  );
};

export default Head;
