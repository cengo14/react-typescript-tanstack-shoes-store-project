import React from "react";
import { colors, numbers } from "../../utils/constant";
import { FilterProps } from "../../types";

const Color = ({ selected, setSelected }: FilterProps<string[]>) => {
  const toggle = (color: string) => {
    const found = selected.includes(color);
    if (!found) {
      setSelected([...selected, color]);
    } else {
      setSelected(selected.filter((i) => i !== color));
    }
  };

  return (
    <div className="lg:mt-5">
      <h2 className="font-semibold mb-4">Numara</h2>
      <div className="grid grid-cols-5 gap-4">
        {colors.map((color, i) => {
          const found = selected.includes(color.id);
          return (
            <button
              key={i}
              title="color button"
              type="button"
              style={{ backgroundColor: color.code }}
              onClick={() => toggle(color.id)}
              className={`max-w-14 max-h-10 min-w-8 min-h-10 lg:px-0 text-center rounded-md cursor-pointer transition hover:ring-2 ${
                found ? "ring-4" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Color;
