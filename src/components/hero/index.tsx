import React from "react";

const Hero = () => {
  return (
    <div className="relative  ">
      <div className=" flex flex-col gap-5 absolute top-1/2 transform -translate-y-1/2 ps-4 md:ps-6 lg:ps-8 xl:ps-10 ">
        <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-open xl:font-semibold text-gray">
          Sadece geçerli süreyle
        </p>
        <h1 className="text-white text-[20px] sm:text-2xl md:text-[30px] lg:text-[50px] xl:text-[74px] font-semibold">
          %30 indirim
        </h1>
        <p className="text-gray font-open text-[12px] sm:text-[14] md:text-[16px] lg:text-[18px] xl:text-[20px] max-w-[60%]">
          Rahatınız düşünülerek tasarlanan spor ayakkabılar, bir sonraki
          seansınıza tüm odağınızı verebilmenizi sağlar.
        </p>
      </div>
      <img className="w-full" src="banner.png" alt="banner" />
    </div>
  );
};

export default Hero;
