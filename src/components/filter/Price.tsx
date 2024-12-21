import React from "react";
import { FilterProps } from "../../types";

const Price = ({ selected, setSelected }: FilterProps<string>) => {
  console.log(selected);

  return (
    <div>
      <h2 className="mb-4 font-semibold">Fiyat</h2>
      <div>
        <input
          title="price"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          type="range"
          className="w-full"
          min={0}
          max={1000}
        />
        <div className="flex justify-between items-center text-xs font-open">
          <span>${selected}</span>
          <span>$1000</span>
        </div>
      </div>
    </div>
  );
};

export default Price;
