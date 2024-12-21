import React from "react";
import { numbers } from "../../utils/constant";
import { FilterProps } from "../../types";

const Size = ({ selected, setSelected }: FilterProps<string[]>) => {
  const toggle = (num: string) => {
    const found = selected.includes(num);
    if (!found) {
      setSelected([...selected, num]);
    } else {
      setSelected(selected.filter((i) => i !== num));
    }
  };

  return (
    <div className="lg:mt-5">
      <h2 className="font-semibold mb-4">Numara</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num, i) => {
          const found = selected.includes(num);
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-neutral-400 ${
                found ? "bg-neutral-900 text-white" : "bg-white"
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
