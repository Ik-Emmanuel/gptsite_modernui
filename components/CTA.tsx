const CTA = () => {
  return (
    <div className="flex justify-start lg:justify-center items-start lg:items-center  flex-col lg:flex-row p-[2rem] my-[4rem] mx-[2rem] lg:m-[4rem] rounded-[1rem] bg-gradientBar font-Manrope">
      <div className="flex flex-col text-left text-white">
        <p className="font-[500] text-[12px] leading-[30px]">
          Request Early Access to Get Started
        </p>
        <h3 className="text-[18px] lg:text-[24px] leading-[32px] lg:leading-[45px] font-[800]">
          Register Today & start exploring the endless possibilities.
        </h3>
      </div>
      <div className="flex justify-center items-center ml-[0rem] lg:ml-[2rem]">
        <button
          className="bg-[#000] text-white font-[700] leading-[28px] lg:leading-[30px] text-14px lg:text-[18px] py-[0.5rem] px-[1rem] rounded-[2rem] border-none outline-none min-w-[150px] cursor-pointer mt-4"
          type="button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
