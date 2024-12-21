import React from "react";

type Props = {
  open: () => void;
};

const Buttons = ({ open }: Props) => {
  return (
    <div className="my-8 flex gap-5 lg:hidden">
      <button
        onClick={open}
        className="flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between hover:bg-gray-100 transition"
      >
        Filtrele
        <img src="filter.svg" alt="filter icon" />
      </button>
      <button className="flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between hover:bg-gray-100 transition">
        Sırala
        <img src="down.svg" alt="sort icon" />
      </button>
    </div>
  );
};

export default Buttons;
