import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[24px] justify-between items-center bg-white-fa p-4 md:p-5 lg:p-6 xl:p-8 text-gray-dark mb-6 md:mb-10 lg:mb-16 xl:mb-20">
      <nav className="flex gap-10 font-semibold max-lg:hidden">
        <a href="#">New Drops🔥</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
      </nav>
      <button className="lg:hidden w-3/12">
        <img src="/hamburger.svg" alt="hamburger menu icon" />
      </button>
      <Link to={"/"}>
        <img src="/logo.svg" alt="logo" />
      </Link>
      <div className=" w-3/12 flex justify-end items-center gap-5 lg:gap-10">
        <img
          className="size-4 md:size-5 lg:size-6 xl:size-7"
          src="/user.svg"
          alt="user"
        />
        <img
          className="size-4 md:size-5 lg:size-6 xl:size-7"
          src="/search.svg"
          alt=""
        />
        <span className="size-6 md:size-7 lg:size-8 md:text-lg bg-yellow rounded-full grid place-items-center font-open font-semibold">
          0
        </span>
      </div>
    </div>
  );
};

export default Header;
