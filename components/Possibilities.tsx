import Image from "next/image";
const Possibilities = () => {
  return (
    <div
      className="flex flex-col lg:flex-row section__padding font-Manrope"
      id="possibility"
    >
      <div className="flex flex-[1] justify-start items-center mr-[2rem]">
        <Image
          src={"/assets/possibility.png"}
          style={{ width: "100%", height: "100%" }}
          width={700}
          height={700}
          quality={100}
          alt="possibility"
        />
      </div>

      <div className=" mt-10 lg:mt-0 flex flex-[1] justify-end items-start flex-col">
        <h4 className="font-[500] text-[16px] text-[#71E5FF] leading-[30px] ">
          Request Early Access to Get Started
        </h4>
        <h1 className="font-[800] text-[34px] leading-[45px] mx-[0rem] my-[1rem] gradient__text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p className="text-colorText text-[16px] leading-[25px] font-[400] mb-[2rem]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 className="text-[#ff8A71]">Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibilities;
