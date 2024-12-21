import React, { useState } from "react";
import { DetailProps } from "../../types";
import { numbers } from "../../utils/constant";

const Size = ({ data }: DetailProps) => {
  const [selected, setSelected] = useState<string>("");

  const toggle = (num: string) => {
    const isSame = selected === num;
    if (isSame) {
      setSelected("");
    } else {
      setSelected(num);
    }
  };
  const stockSize = data.size.split(",");
  console.log(selected, data.size);

  return (
    <div>
      <h2 className="mb-4 font-semibold">Numara</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num, i) => {
          const found = selected === num;

          const inStock = stockSize.includes(num);
          return (
            <button
              disabled={!inStock}
              key={i}
              type="button"
              onClick={() => toggle(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition  ${
                found
                  ? "bg-neutral-900 text-white "
                  : !inStock
                  ? "bg-gray-300 text-gray-500 line-through"
                  : "bg-white hover:bg-neutral-400"
              }  `}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
