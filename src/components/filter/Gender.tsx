import React from "react";
import { FilterProps } from "../../types";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

const Gender = ({ selected, setSelected }: FilterProps<string>) => {
  return (
    <div>
      <h2 className="mb-4 font-semibold">Cinsiyet</h2>
      <div className="flex items-center justify-around gap-3">
        <div
          className={`flex items-center gap-3 border p-1 w-1/2 justify-center ${
            selected === "men" && "border bg-white rounded-full"
          }`}
        >
          <input
            title="men"
            className="hidden"
            type="radio"
            name="gender"
            onClick={() => setSelected("men")}
            id="men"
            checked={selected === "men"}
          />
          <label
            htmlFor="men"
            title="men"
            className="font-semibold  cursor-pointer"
          >
            <BsGenderMale size={22} className="animate-none" />
          </label>
        </div>
        <div
          className={`flex items-center gap-3 border  p-1 w-1/2 justify-center ${
            selected === "women" && "border bg-white rounded-full "
          }`}
        >
          <input
            title="women"
            className="hidden"
            type="radio"
            name="gender"
            id="women"
            onClick={() => setSelected("women")}
            checked={selected === "women"}
          />
          <label
            htmlFor="women"
            title="women"
            className="font-semibold cursor-pointer"
          >
            <BsGenderFemale size={22} className="animate-none" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Gender;
