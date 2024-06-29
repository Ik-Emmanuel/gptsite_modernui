import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-[#031B34] section__padding font-Manrope">
      <div className="w-full text-center mb-[3rem]">
        <h1 className="font-[800] text-[54px] leading-[75px] gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="flex justify-center items-center p-[1rem] border-[1px] border-white text-center mb-[10rem] cursor-pointer rounded-md">
        <p className="text-[18px] leading-[21px] text-white tracking-tight">
          Request Early Access
        </p>
      </div>

      <div className="flex justify-between flex-col lg:flex-row gap-6 items-start flex-wrap w-full text-left">
        <div className="flex flex-col gap-6 ">
          <Image
            src={"/assets/logo.svg"}
            width={100}
            height={100}
            alt="gpt3_logo"
            className="w-[118px] h-[32px] mb-[1rem]"
          />
          <p className="text-white text-[12px] leading-[15px]">
            IK-Emmanuel&apos;s Creation, <br /> All Rights Reserved
          </p>
        </div>
        <div className="flex justify-start flex-col  text-[12px] leading-[15px] text-white">
          <h4 className="text-colorSubText text-[18px]  font-[800] leading-[17px] mb-[0.9rem]">
            Links
          </h4>
          <div className=" my-[0.5rem] cursor-pointer space-y-7">
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex justify-start flex-col  text-[12px] leading-[15px] text-white">
          <h4 className="text-colorSubText text-[18px]  font-[800] leading-[17px] mb-[0.9rem]">
            Company
          </h4>

          <div className=" my-[0.5rem] cursor-pointer space-y-7 ">
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex justify-start flex-col  text-[12px] leading-[15px] text-white">
          <h4 className="text-colorSubText text-[18px]  font-[800] leading-[17px] mb-[0.9rem]">
            Get in touch
          </h4>
          <div className=" my-[0.5rem] cursor-pointer space-y-7 text-[12px] leading-[15px] text-white ">
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>

      <div className="mt-[5rem] text-center w-full m-[1rem]text-[12px] leading-[15px] text-white">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
