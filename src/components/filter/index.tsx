import React, { useEffect, useState } from "react";
import Size from "./Size";
import Color from "./Color";
import Gender from "./Gender";
import Price from "./Price";
import { useDebounce } from "@uidotdev/usehooks";
import { useSearchParams } from "react-router-dom";

const Filter = ({ close }: { close: () => void }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [size, setSize] = useState<string[]>(
    searchParams.get("size")?.split(",") || []
  );
  const [color, setColor] = useState<string[]>(
    searchParams.get("color")?.split(",") || []
  );
  const [gender, setGender] = useState<string>(
    searchParams.get("gender") || ""
  );
  const [price, setPrice] = useState<string>(searchParams.get("size") || "0");
  const debouncePrice = useDebounce(price, 500);
  useEffect(() => {
    const params: Record<string, string> = {};

    if (size.length > 0) params.size = size.join(",");
    if (color.length > 0) params.color = color.join(",");
    if (gender) params.gender = gender;
    if (debouncePrice !== "0") params.price = debouncePrice;

    setSearchParams(params);
  }, [size, color, gender, debouncePrice]);
  const handleReset = () => {
    setSize([]);
    setColor([]);
    setGender("");
    setPrice("0");
  };
  return (
    <div className="max-lg:fixed max-lg:inset-0 z-10 max-lg:bg-neutral-950 max-lg:bg-opacity-60 backdrop-blur-sm grid place-items-center">
      <div className="max-lg:max-lg max-lg:h-[80vh] max-lg:min-w-[380px] ">
        <div className="max-lg:bg-white max-lg:flex max-lg:justify-between max-lg:p-4 rounded-t-md">
          <h2 className="text-xl font-semibold">Filtrele</h2>
          <button onClick={close} className="lg:hidden font-semibold">
            X
          </button>
        </div>
        <form className="max-lg:p-5 bg-gray h-full flex flex-col gap-6 rounded-b-md">
          <Size selected={size} setSelected={setSize} />
          <Color selected={color} setSelected={setColor} />
          <Gender selected={gender} setSelected={setGender} />
          <Price selected={price} setSelected={setPrice} />
          <button
            onClick={handleReset}
            type="reset"
            className="border border-neutral-900 p-2 rounded-lg hover:bg-neutral-700 hover:text-white transition"
          >
            Sıfırla
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
