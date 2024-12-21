import React from "react";
import { Shoe } from "../../../types";

type Props = {
  shoe: Shoe;
};

const Badge = ({ shoe }: Props) => {
  return (
    <div
      className={`absolute py-1 px-2 rounded-ss-3xl rounded-ee-2xl ${
        shoe.discount ? "bg-yellow" : shoe.isNew ? "bg-green-500" : ""
      }`}
    >
      {shoe.discount ? `%${shoe.discount} İndirim` : shoe.isNew && "Yeni"}
    </div>
  );
};

export default Badge;
