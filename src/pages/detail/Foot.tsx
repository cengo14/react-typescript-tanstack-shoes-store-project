import React from "react";
import { DetailProps } from "../../types";

const Foot = ({ data }: DetailProps) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="flex-1 p-4 rounded-lg bg-black hover:bg-neutral-700">
            Sepete Ekle
          </button>
          <button
            className="p-4 bg-red-600 hover:bg-red-500 rounded-lg"
            title="heart like icon"
          >
            <img className="size-6" src="/heart.svg" alt="heart" />
          </button>
        </div>
        <button className="bg-sky-600 hover:bg-sky-500 p-4 rounded-lg">
          Hemen Satın Al
        </button>
      </div>
      <div>
        <h2 className="font-semibold mt-8 mb-2 text-2xl">Ürün Hakkında</h2>
        <p
          className="font-open text-xl text-gray-dark"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></p>
      </div>
    </div>
  );
};

export default Foot;
