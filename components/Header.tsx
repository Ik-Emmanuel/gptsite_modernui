import Image from "next/image";

const Header = () => {
  return (
    <div
      className="flex flex-col lg:flex-row px-[2rem] lg:px-[4rem] py-[2rem] mt-4"
      id="home"
    >
      <div className="flex flex-[1] min-[1300px]:flex-[0.65]  justify-center items-start flex-col mr-[5rem]">
        <h1 className="font-[800] text-[32px] lg:text-[60px] leading-[35px] lg:leading-[75px] tracking-[-0.04em] gradient__text">
          Build Something amazing with GPT-3 OpenAI
        </h1>

        <p className=" text-[#81AFDD] font-[400] text-[12px] lg:text-[20px] leading-[28px mt-[1.5rem]">
          This is an open-source project created by Open AI. It can be used to
          generate text and images. and it is the best GPT-3 OpenAI.To begin,
          simply sign-up using the link below.
        </p>

        <div className="w-full mx-0 mr-0 my-[2rem] flex ">
          <input
            className="flex flex-[2] min-h-[50px] font-[400] text-[12px] lg:text-[20px] leading-[28px] text-white bg-[#052D45] rounded-[5px] px-2 lg:px-5 py-2 lg:py-4 border-[2px] border-[#031B34] outline-none rounded-tl-[10px] rounded-bl-[10px]"
            type="email"
            placeholder="Enter Your Email Address"
          />
          <button
            className="flex flex-[0.6] w-full min-h-[50px] font-[400] text-[12px] lg:text-[20px] leading-[28px] text-white bg-[#FF4820] rounded-[5px] px-5 py-4 border-[2px] border-[#FF4820] outline-none rounded-tr-[10px] rounded-br-[10px]"
            type="button"
          >
            Get Started
          </button>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-start items-center mt-[2rem]">
          <Image
            src={"/assets/people.png"}
            width={182}
            height={38}
            alt="people_image"
          />
          <p className="mt-0 mr-0  mb-0  ml-[1rem] font-[500] text-[12px] leading-[38px] text-[#fff] text-center">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>

      <div className="flex flex-[0.7] justify-center items-center">
        <Image
          src={"/assets/ai.png"}
          width={800}
          height={800}
          quality={100}
          alt="ai_image"
        />
      </div>
    </div>
  );
};

export default Header;
