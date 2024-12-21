import React, { useState } from "react";
import Hero from "../../components/hero";
import Buttons from "../../components/buttons";
import Filter from "../../components/filter";
import List from "../../components/list";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Hero />
      <Buttons open={() => setIsOpen(true)} />
      <h1 className="text-xl md:text-[26px lg:text-[30px] xl:text-[36px] mb-4 font-semibold md:mt-[28px] xl:mt-[32px]">
        Sana uygun seçenekler
      </h1>
      <div className="grid grid-cols-4 gap-5">
        <div className={`${isOpen ? "max-lg:block" : "max-lg:hidden"}`}>
          <Filter close={() => setIsOpen(false)} />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
