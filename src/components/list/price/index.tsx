import React from "react";
import { Shoe } from "../../../types";

type Props = {
  shoe: Shoe;
};

const Price = ({ shoe }: Props) => {
  let price = shoe.price;
  if (shoe.discount) {
    price = (shoe.price / 100) * shoe.discount;
    price = shoe.price - price;
  }
  return (
    <div
      className={`ms-1 rounded-md font-normal text-sm  ${
        shoe.discount ? "text-yellow" : shoe.isNew ? "text-green-500" : ""
      }`}
    >
      ${shoe.discount ? price : shoe.price}
    </div>
  );
};

export default Price;
