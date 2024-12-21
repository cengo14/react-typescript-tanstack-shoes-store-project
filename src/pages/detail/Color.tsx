import React, { useState } from "react";
import { DetailProps } from "../../types";
import { colors } from "../../utils/constant";

const Color = ({ data }: DetailProps) => {
  const color = data.color.split(",");

  const [selected, setSelected] = useState<string>("");

  const toggle = (id: string) => {
    const isSame = selected === id;
    if (isSame) {
      setSelected("");
    } else {
      setSelected(id);
    }
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Renkler</h2>
      <div className="flex gap-5">
        {color.map((id) => {
          const clr = colors.find((i) => i.id === id);
          return (
            <div className={`p-1 ${selected === id && "ring"} rounded-full`}>
              <div
                onClick={() => toggle(id)}
                title={id}
                className={`size-8 rounded-full cursor-pointer`}
                style={{ backgroundColor: clr?.code }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
