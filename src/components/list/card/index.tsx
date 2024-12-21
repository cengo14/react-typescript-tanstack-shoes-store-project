import React from "react";
import { Shoe } from "../../../types";
import { Link } from "react-router-dom";
import Badge from "../badge";
import Price from "../price";

type Props = {
  shoe: Shoe;
};

const Card = ({ shoe }: Props) => {
  return (
    <div className="flex flex-col p-1 justify-between bg-white rounded-3xl">
      <div className="p-2">
        <div className=" relative">
          <Badge shoe={shoe} />
          <img
            src={shoe.picture[0]}
            alt="shoe"
            className="aspect-square w-full rounded-3xl object-cover"
          />
        </div>
        <h2 className="line-clamp-2 font-bold mt-5 mb-4 lg:text-xl xl:text-2xl line-clamp-1">
          {shoe.name}
        </h2>
      </div>
      <Link
        className="bg-gray-dark hover:bg-neutral-700 text-white font-medium  py-1 rounded-3xl text-center flex justify-center items-center mb-2"
        to={`/detail/${shoe.id}`}
      >
        Ürünü Görüntüle - <Price shoe={shoe} />
      </Link>
    </div>
  );
};

export default Card;
