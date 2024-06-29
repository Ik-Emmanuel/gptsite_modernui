import Feature from "./Feature";

const Gpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin font-Manrope" id="wgpt3">
      <div className="flex unset">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          featureclass="flex flex-[1] min-w-[210px] display-[unset] flex-col"
          featureTextClass="mt-[0.5rem] max-w-[700px]"
          featureTitleClass=""
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center mx-[0rem] lg:mx-[rem] ml-0  my-[2rem] mt-[2rem]">
        <h1 className="text-[34px] leading-[45px] font-[800] font-Manrope max-w-full lg:max-w-[510px] gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="font-[500] text-[16px] leading-[30px] text-colorSubText cursor-pointer">
          Explore the Library
        </p>
      </div>

      <div className="flex flex-col lg:flex-row mt-[2rem] justify-between items-center gap-8">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          featureclass="lg:flex-col"
        />
        <Feature
          title="Knowledge base"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          featureclass="lg:flex-col"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          featureclass="lg:flex-col"
        />
      </div>
    </div>
  );
};

export default Gpt3;
